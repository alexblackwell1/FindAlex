import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import '../styling/default.css';
import '../styling/resume.css';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [error, setError] = useState(null);

  const handleDocumentLoadError = (error) => {
    setError(error);
    console.error('Error: loading PDF:', error);
  };

  return (
    <div className='resume-page'>
      <div className='resume-title'>
        <Link to='/' className='return'><h1>◄</h1></Link>
        <h1>Résumé</h1>
      </div>
      <div className='resume-body'>
        {error ? (
          <div className='error-message'>Error loading PDF</div>
        ) : (
          <Document file={'./resume.pdf'} onLoadError={handleDocumentLoadError}>
            <Page pageNumber={1} />
          </Document>
        )}
      </div>
    </div>
  );
}

export default Resume;
