'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

// Printable content component with proper forwardRef
const PrintableContent = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref}>
    <style>{`
      @media print {
        * { 
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        @page {
          size: A4;
          margin: 1cm;
        }
        html, body { 
          font-family: Arial, sans-serif !important;
          font-size: 12pt !important;
          line-height: 1.5 !important;
          height: initial !important;
          overflow: initial !important;
        }
        h1 { 
          color: black !important;
          font-size: 18pt !important;
          margin-bottom: 20pt !important;
        }
        p {
          color: black !important;
          margin-bottom: 10pt !important;
        }
        .test-content {
          padding: 20pt !important;
        }
      }
      @media screen {
        .test-content {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
      }
    `}</style>
    
    <div className="test-content">
      <h1>Print Test - Full Content</h1>
      <p>✅ This is a test to verify react-to-print is working correctly.</p>
      <p>✅ If you can see ALL this content in the print preview, printing is working!</p>
      <p>✅ This should include the header, all paragraphs, and proper formatting.</p>
      <p>✅ The print should show A4 page size with proper margins.</p>
      <p>✅ Font should be Arial, 12pt with proper line spacing.</p>
      
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>Test Section</h2>
        <ul>
          <li>Test item 1</li>
          <li>Test item 2</li>
          <li>Test item 3</li>
        </ul>
      </div>
    </div>
  </div>
));

PrintableContent.displayName = 'PrintableContent';

export function PrintTest() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Print Test - Full Content',
    onBeforeGetContent: () => {
      console.log('🖨️ Preparing print content...');
      return new Promise<void>((resolve) => {
        // Small delay to ensure content is ready
        setTimeout(() => {
          console.log('🖨️ Content ready for printing');
          resolve();
        }, 100);
      });
    },
    onAfterPrint: () => {
      console.log('🖨️ Print dialog closed');
    },
    onPrintError: (errorLocation, error) => {
      console.error('🖨️ Print error:', errorLocation, error);
      alert(`Print failed at ${errorLocation}: ${error.message}`);
    }
  });

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Enhanced Print Test</h2>
      <button
        onClick={handlePrint}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4"
      >
        Test Print (Enhanced)
      </button>
      
      <div className="text-sm text-gray-600 mb-4">
        <p>This test should show:</p>
        <ul className="list-disc list-inside">
          <li>Full content with header and all paragraphs</li>
          <li>Proper A4 page formatting</li>
          <li>Console logs for debugging</li>
        </ul>
      </div>
      
      {/* Always render the printable content (visible for debugging) */}
      <div className="mt-4 bg-gray-50 rounded">
        <h3 className="text-md font-semibold p-2 bg-gray-200 rounded-t">Preview (what should print):</h3>
        <PrintableContent ref={printRef} />
      </div>
    </div>
  );
}