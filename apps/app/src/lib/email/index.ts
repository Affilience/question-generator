import { Resend } from 'resend';

let resend: Resend | null = null;

function getResendClient() {
  if (!resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('Missing RESEND_API_KEY environment variable');
    }
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

// Template ID from Resend dashboard
const WELCOME_EMAIL_TEMPLATE_ID = 'c2cf0ad8-a435-4476-9b7e-8bcb84a7769c';

export interface WelcomeEmailData {
  email: string;
  firstName: string;
}

export async function sendWelcomeEmail({ email, firstName }: WelcomeEmailData) {
  try {
    const resendClient = getResendClient();
    const { data, error } = await resendClient.emails.send({
      from: 'Past Papers <welcome@past-papers.co.uk>',
      to: [email],
      template: {
        id: WELCOME_EMAIL_TEMPLATE_ID,
        variables: {
          firstName: firstName,
        },
      },
      tags: [
        {
          name: 'category',
          value: 'welcome',
        },
      ],
    });

    if (error) {
      console.error('Error sending welcome email:', error);
      throw new Error(`Failed to send welcome email: ${error.message}`);
    }

    console.log('Welcome email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error in sendWelcomeEmail:', error);
    throw error;
  }
}

// Values interpolated into email HTML can originate from checkout inputs
// (customer name, emails) — always escape them.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export interface ClaimApprovalEmailData {
  to: string;
  approveUrl: string;
  planName: string;
  accountEmail: string;
  purchaseDate: string;
}

/**
 * Sent to the email address that paid at checkout when a signed-in account
 * asks to link that purchase. Clicking the button approves the link.
 */
export async function sendClaimApprovalEmail({
  to,
  approveUrl,
  planName,
  accountEmail,
  purchaseDate,
}: ClaimApprovalEmailData) {
  const resendClient = getResendClient();
  const formattedDate = new Date(purchaseDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const safeAccountEmail = escapeHtml(accountEmail);
  const safePlanName = escapeHtml(planName);

  const { data, error } = await resendClient.emails.send({
    from: 'Past Papers <support@past-papers.co.uk>',
    to: [to],
    subject: `Link your ${planName} purchase to ${accountEmail}?`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
        <h1 style="font-size: 20px; margin: 0 0 16px;">Link your Past Papers purchase?</h1>
        <p style="font-size: 15px; line-height: 1.6; color: #444;">
          Someone signed in as <strong>${safeAccountEmail}</strong> asked to link the
          <strong>${safePlanName}</strong> subscription you purchased on ${formattedDate}
          (using this email address) to their Past Papers account.
        </p>
        <p style="font-size: 15px; line-height: 1.6; color: #444;">
          If that's right &mdash; for example, you paid for your child's account &mdash;
          click the button below and the subscription will activate on their account.
        </p>
        <p style="margin: 28px 0;">
          <a href="${approveUrl}"
             style="background: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 15px; font-weight: 600; display: inline-block;">
            Link my purchase to ${safeAccountEmail}
          </a>
        </p>
        <p style="font-size: 13px; line-height: 1.6; color: #888;">
          This link can be used once and expires in 24 hours.
          If you didn't expect this email, ignore it &mdash; your purchase stays
          exactly where it is &mdash; or reply to reach support.
        </p>
      </div>
    `,
    tags: [
      {
        name: 'category',
        value: 'claim-approval',
      },
    ],
  });

  if (error) {
    console.error('Error sending claim approval email:', error);
    throw new Error(`Failed to send claim approval email: ${error.message}`);
  }

  console.log('Claim approval email sent:', { to, id: data?.id });
  return { success: true, data };
}

export interface UnclaimedPurchaseSummary {
  email: string;
  customerName: string | null;
  planName: string;
  createdAt: string;
  isNew: boolean;
}

/**
 * Daily support digest listing paid purchases that no account has claimed yet,
 * so we can reach out before the customer hits a limit and complains.
 */
export async function sendUnclaimedPurchasesAlert(to: string, purchases: UnclaimedPurchaseSummary[]) {
  const resendClient = getResendClient();
  const newCount = purchases.filter((p) => p.isNew).length;

  const rows = purchases
    .map((p) => {
      const ageHours = Math.round((Date.now() - new Date(p.createdAt).getTime()) / 3600000);
      const age = ageHours < 48 ? `${ageHours}h` : `${Math.round(ageHours / 24)}d`;
      return `
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-size: 14px;">${escapeHtml(p.email)}${p.isNew ? ' <span style="color: #dc2626; font-weight: 600;">(new)</span>' : ''}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-size: 14px;">${p.customerName ? escapeHtml(p.customerName) : '—'}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-size: 14px;">${escapeHtml(p.planName)}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-size: 14px;">${age} ago</td>
        </tr>`;
    })
    .join('');

  const { data, error } = await resendClient.emails.send({
    from: 'Past Papers <support@past-papers.co.uk>',
    to: [to],
    subject: `${newCount} new unclaimed purchase${newCount === 1 ? '' : 's'} need attention`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 640px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
        <h1 style="font-size: 18px; margin: 0 0 8px;">Unclaimed paid purchases</h1>
        <p style="font-size: 14px; color: #666; margin: 0 0 20px;">
          These customers paid but no account has their subscription yet &mdash;
          usually a checkout/account email mismatch. Consider emailing them a link to
          <a href="https://www.past-papers.co.uk/subscription/link-purchase">link their purchase</a>.
        </p>
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr>
              <th align="left" style="padding: 8px 12px; border-bottom: 2px solid #ddd; font-size: 13px; color: #888;">Checkout email</th>
              <th align="left" style="padding: 8px 12px; border-bottom: 2px solid #ddd; font-size: 13px; color: #888;">Name</th>
              <th align="left" style="padding: 8px 12px; border-bottom: 2px solid #ddd; font-size: 13px; color: #888;">Plan</th>
              <th align="left" style="padding: 8px 12px; border-bottom: 2px solid #ddd; font-size: 13px; color: #888;">Purchased</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `,
    tags: [
      {
        name: 'category',
        value: 'unclaimed-alert',
      },
    ],
  });

  if (error) {
    console.error('Error sending unclaimed purchases alert:', error);
    throw new Error(`Failed to send unclaimed purchases alert: ${error.message}`);
  }

  console.log('Unclaimed purchases alert sent:', { to, count: purchases.length, id: data?.id });
  return { success: true, data };
}

export async function sendTestEmail(email: string) {
  try {
    const resendClient = getResendClient();
    const { data, error } = await resendClient.emails.send({
      from: 'Past Papers <test@past-papers.co.uk>',
      to: [email],
      subject: 'Test Email - Resend Integration Working',
      html: '<p>This is a test email to verify Resend integration is working correctly.</p>',
      tags: [
        {
          name: 'category',
          value: 'test',
        },
      ],
    });

    if (error) {
      console.error('Error sending test email:', error);
      throw new Error(`Failed to send test email: ${error.message}`);
    }

    console.log('Test email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error in sendTestEmail:', error);
    throw error;
  }
}