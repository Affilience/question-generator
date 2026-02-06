'use client';

import { ReactNode } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Initialize Stripe outside of component to avoid recreating on re-renders
const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY 
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) 
  : null;

interface StripeProviderProps {
  children: ReactNode;
  clientSecret?: string;
}

// Dark theme appearance that matches the site
const appearance = {
  theme: 'night' as const,
  variables: {
    colorPrimary: '#3b82f6',
    colorBackground: '#111111',
    colorText: '#ffffff',
    colorTextSecondary: '#a1a1a1',
    colorDanger: '#ef4444',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontSizeBase: '14px',
    borderRadius: '8px',
    spacingUnit: '4px',
  },
  rules: {
    '.Input': {
      backgroundColor: '#1a1a1a',
      border: '1px solid #2a2a2a',
      boxShadow: 'none',
    },
    '.Input:focus': {
      border: '1px solid #3b82f6',
      boxShadow: '0 0 0 1px #3b82f6',
    },
    '.Input--invalid': {
      border: '1px solid #ef4444',
    },
    '.Label': {
      color: '#a1a1a1',
      fontWeight: '500',
    },
    '.Tab': {
      backgroundColor: '#1a1a1a',
      border: '1px solid #2a2a2a',
    },
    '.Tab--selected': {
      backgroundColor: '#3b82f6',
      borderColor: '#3b82f6',
    },
    '.TabIcon': {
      fill: '#a1a1a1',
    },
    '.TabIcon--selected': {
      fill: '#ffffff',
    },
  },
};

export function StripeProvider({ children, clientSecret }: StripeProviderProps) {
  const options = clientSecret
    ? {
        clientSecret,
        appearance,
      }
    : { appearance };

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
}

export { stripePromise, appearance };
