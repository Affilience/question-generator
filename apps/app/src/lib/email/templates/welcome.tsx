import * as React from 'react';

interface WelcomeEmailProps {
  firstName: string;
}

export function WelcomeEmailTemplate({ firstName }: WelcomeEmailProps) {
  return (
    <div
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        color: '#333333',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: '#3b82f6',
          padding: '32px 24px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            margin: '0',
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#ffffff',
          }}
        >
          Welcome to Past Papers!
        </h1>
        <p
          style={{
            margin: '8px 0 0 0',
            fontSize: '16px',
            color: '#bfdbfe',
          }}
        >
          Your AI-powered exam practice journey starts here
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: '32px 24px' }}>
        <p style={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px 0' }}>
          Hi {firstName},
        </p>

        <p style={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px 0' }}>
          Thank you for joining Past Papers! We're excited to help you excel in your GCSE and A-Level studies with unlimited AI-generated practice questions.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 24px 0' }}>
          Here's what you can do right now:
        </p>

        <ul style={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 24px 0', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>
            Browse practice questions by subject and exam board
          </li>
          <li style={{ marginBottom: '8px' }}>
            Generate unlimited custom practice papers
          </li>
          <li style={{ marginBottom: '8px' }}>
            Track your progress with detailed analytics
          </li>
          <li style={{ marginBottom: '8px' }}>
            Get step-by-step solutions and explanations
          </li>
        </ul>

        <div
          style={{
            backgroundColor: '#fef3c7',
            border: '1px solid #fcd34d',
            borderRadius: '8px',
            padding: '20px',
            margin: '24px 0',
          }}
        >
          <h3
            style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#92400e',
            }}
          >
            🚧 We're Building Something Amazing
          </h3>
          <p
            style={{
              margin: '0 0 12px 0',
              fontSize: '16px',
              lineHeight: '24px',
              color: '#92400e',
            }}
          >
            Past Papers is a brand new platform and we're constantly improving the experience. 
            As an early user, you might encounter occasional bugs or missing features.
          </p>
          <p
            style={{
              margin: '0',
              fontSize: '16px',
              lineHeight: '24px',
              color: '#92400e',
            }}
          >
            If you find any issues or have suggestions, please email us at{' '}
            <a
              href="mailto:support@past-papers.co.uk"
              style={{ color: '#92400e', textDecoration: 'underline' }}
            >
              support@past-papers.co.uk
            </a>{' '}
            and we'll fix them promptly. Your feedback helps us build a better platform for everyone!
          </p>
        </div>

        <div style={{ textAlign: 'center', margin: '32px 0' }}>
          <a
            href="https://www.past-papers.co.uk"
            style={{
              display: 'inline-block',
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              padding: '12px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Start Practicing Now
          </a>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '24px', margin: '0 0 16px 0' }}>
          Good luck with your studies!
        </p>

        <p style={{ fontSize: '16px', lineHeight: '24px', margin: '0' }}>
          Best regards,<br />
          The Past Papers Team
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: '#f8fafc',
          padding: '24px',
          textAlign: 'center',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#64748b' }}>
          Past Papers - AI-Generated Exam Practice
        </p>
        <p style={{ margin: '0', fontSize: '14px', color: '#64748b' }}>
          <a
            href="https://www.past-papers.co.uk/privacy"
            style={{ color: '#64748b', textDecoration: 'none' }}
          >
            Privacy Policy
          </a>
          {' • '}
          <a
            href="https://www.past-papers.co.uk/terms"
            style={{ color: '#64748b', textDecoration: 'none' }}
          >
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
}

export default WelcomeEmailTemplate;