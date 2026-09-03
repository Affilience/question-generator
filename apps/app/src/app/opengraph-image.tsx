import { ImageResponse } from 'next/og';

/**
 * Default social share card.
 *
 * layout.tsx pointed openGraph.images and twitter.images at /og-image.png,
 * which does not exist in public/ — so every share of every page rendered a
 * blank preview. Generating it here keeps the wordmark and the strapline in
 * one place instead of a binary nobody can edit.
 */
export const runtime = 'edge';
export const alt = 'Past Papers — AI practice questions for GCSE and A-Level';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0a0a0a',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#3b82f6',
          }}
        />
        <div
          style={{
            fontSize: 30,
            color: '#3b82f6',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: 28,
          }}
        >
          Past Papers
        </div>
        <div
          style={{
            fontSize: 76,
            color: '#ffffff',
            lineHeight: 1.1,
            fontWeight: 600,
            maxWidth: '900px',
          }}
        >
          Unlimited exam questions for GCSE &amp; A-Level
        </div>
        <div style={{ fontSize: 32, color: '#9ca3af', marginTop: 36 }}>
          AQA · Edexcel · OCR — every question with a full mark scheme
        </div>
      </div>
    ),
    size
  );
}
