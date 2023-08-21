import React from 'react';
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import resume from '../public/Resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc =`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Resume() {
  return (
    <section className="contact" id="contact">
      <div className='res'>
      <h2 className="heading"> <span>Zac's Resume&#33;</span></h2>
      <Document
      file={resume}
      onLoadError={console.error}
      className="pdf-document">
        
        <Page pageIndex={0}/>
      </Document>
      </div>
      
    </section>
  );
}

export default Resume;
