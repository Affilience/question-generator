'use client';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

// Simple test component to verify printing works
const PrintableContent = ({ forwardRef }: { forwardRef: any }) => (
  <div ref={forwardRef} style={{ padding: '20px' }}>
    <h1>Print Test</h1>
    <p>This is a test to verify react-to-print is working correctly.</p>
    <p>If you can see this in the print preview, printing is working!</p>
    <style>{`
      @media print {
        body { font-family: Arial, sans-serif; }
        h1 { color: black; }
      }
    `}</style>
  </div>
);

export function PrintTest() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Print Test',
  });

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Print Test</h2>
      <button
        onClick={handlePrint}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Test Print
      </button>
      
      {/* Always render the printable content (visible for debugging) */}
      <div className="mt-4 border p-4 bg-gray-50">
        <PrintableContent forwardRef={printRef} />
      </div>
    </div>
  );
}