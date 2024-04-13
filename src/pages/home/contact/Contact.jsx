import React, { useContext, useRef, useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ThemeContext from "../../../contexts/ThemeContext";
import "./Contact.css";

function Contact() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const { width: screenWidth } = useWindowDimensions();
  const { isDark } = useContext(ThemeContext);

  const pdfRef = useRef(null);
  const [pdfWidth, setPdfWidth] = useState();

  const onLoadSuccess = () => {
    setPdfWidth(pdfRef.current.scrollWidth);
  };

  useEffect(() => {
    setPdfWidth(pdfRef.current.scrollWidth);
  }, [screenWidth]);
  return (
    <div className="uk-text-center">
      <div className="controls">
        <a
          className={`resume-download-button ${
            isDark ? "dark-download" : "light-download"
          }`}
          href="./resume.pdf"
          download
        >
          Download Resume
        </a>
      </div>
      <div className="resume-wrapper" ref={pdfRef}>
        <Document file="./resume.pdf" onLoadSuccess={onLoadSuccess}>
          {pdfWidth && <Page pageNumber={1} width={pdfWidth} />}
        </Document>
      </div>
    </div>
  );
}

export default Contact;
