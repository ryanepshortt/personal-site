import React, { useContext, useRef, useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ThemeContext from "../../../contexts/ThemeContext";

// Fix: initialise pdfjs once at module level, not inside render
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Contact() {
  const { width: screenWidth } = useWindowDimensions();
  const { isDark, theme } = useContext(ThemeContext);
  const pdfRef = useRef(null);
  const [pdfWidth, setPdfWidth] = useState(undefined);

  const onLoadSuccess = () => {
    if (pdfRef.current) setPdfWidth(pdfRef.current.scrollWidth);
  };

  useEffect(() => {
    if (pdfRef.current) setPdfWidth(pdfRef.current.scrollWidth);
  }, [screenWidth]);

  return (
    <div>
      {/* Page header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "#7c6fec" }}
          >
            Resume
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(124,111,236,0.2)" }}
          />
        </div>
        <h1
          className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4"
          style={{ color: theme.cardTitle }}
        >
          My
          <span
            style={{
              background: "linear-gradient(135deg, #a89cf0 0%, #7c6fec 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline",
            }}
          >
            {" "}
            résumé.
          </span>
        </h1>
      </div>

      {/* Download button */}
      <div className="flex justify-center mb-8">
        <motion.a
          href="./resume.pdf"
          download
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold text-white no-underline"
          style={{
            background: "linear-gradient(135deg, #7c6fec 0%, #a89cf0 100%)",
            boxShadow: "0 0 30px rgba(124,111,236,0.35)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1v9m0 0L5 7m3 3l3-3M2 12v2a1 1 0 001 1h10a1 1 0 001-1v-2"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Download Resume
        </motion.a>
      </div>

      {/* PDF viewer */}
      <div
        ref={pdfRef}
        className="flex justify-center overflow-x-auto rounded-2xl border"
        style={{
          borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
          background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
        }}
      >
        <Document file="./resume.pdf" onLoadSuccess={onLoadSuccess}>
          {pdfWidth && (
            <Page
              pageNumber={1}
              width={pdfWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          )}
        </Document>
      </div>
    </div>
  );
}

export default Contact;
