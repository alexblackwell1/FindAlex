import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from "react-pdf";
import resume from '../styling/assets/resume.pdf';
import '../styling/default.css';
import '../styling/resume.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    const handleScroll = (e) => {
        const container = e.target;
        if (container.scrollTop + container.offsetHeight >= container.scrollHeight) {
          container.scrollTop = container.scrollHeight - container.offsetHeight;
        }
      };

    return (
      <div className="resume-page">
            <div className="resume-title">
                <Link to="/" className="return">
                    <h1>◄</h1>
                </Link>
                <h1>Résumé</h1>
            </div>
            <div className="resume-body">
                <div className="pdf-container" onScroll={handleScroll}>
                    <Document file={resume}>
                        <Page pageNumber={1} renderTextLayer={false} width={800} />
                    </Document>
                </div>
            </div>
      </div>
    );
}

export default Resume;
