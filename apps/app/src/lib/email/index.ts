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