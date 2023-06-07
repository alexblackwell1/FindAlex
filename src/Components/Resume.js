import React from 'react';
import { Link } from 'react-router-dom';
import resumePDF from '../styling/assets/resume.pdf';
import resumeIMG from '../styling/assets/resume.png'
import '../styling/default.css';
import '../styling/resume.css';

function Resume() {
    const downloadPDF = () => {
        fetch(resumePDF).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Alex_Blackwell_resume.pdf';
                alink.click();
            });
        });
    };
      

    return (
      <div className="page">
            <div className="title">
                <Link to="/" className="return">
                    <h1>◄</h1>
                </Link>
                <h1>Résumé</h1>
            </div>
            <img className="resume-body" src={resumeIMG} alt='resume' />
            <div className='resume-download' onClick={downloadPDF}>
                <h2 className='resume-download-text'>Download</h2>
            </div>
      </div>
    );
}

export default Resume;
