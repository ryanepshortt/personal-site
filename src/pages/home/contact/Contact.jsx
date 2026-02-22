import React, { useContext, useRef, useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ThemeContext from "../../../contexts/ThemeContext";

// Fix: initialise pdfjs once at module level
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// ── Replace these placeholders with your real details ──
const CONTACT_INFO = {
  email: "ryan.ep.shortt@gmail.com",
  phone: "+1 (289) 600-3833",
  github: "https://github.com/ryanepshortt",
  linkedin: "https://www.linkedin.com/in/ryan-shortt",
};

const CONTACT_CARDS = [
  {
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: CONTACT_INFO.github.replace("https://", ""),
    href: CONTACT_INFO.github,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ryan-shortt",
    href: CONTACT_INFO.linkedin,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

function Contact() {
  const { width: screenWidth } = useWindowDimensions();
  const { isDark, theme } = useContext(ThemeContext);
  const pdfRef = useRef(null);
  const [pdfWidth, setPdfWidth] = useState(undefined);

  const onLoadSuccess = () => {
    if (pdfRef.current) {
      // Cap at 750px
      setPdfWidth(Math.min(pdfRef.current.scrollWidth, 750));
    }
  };

  useEffect(() => {
    if (pdfRef.current) {
      setPdfWidth(Math.min(pdfRef.current.scrollWidth, 750));
    }
  }, [screenWidth]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-12"
    >
      {/* ── Page header ── */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "#7c6fec" }}
          >
            Contact
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(124,111,236,0.2)" }}
          />
        </div>
        <h1
          className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-3"
          style={{ color: theme.cardTitle }}
        >
          Get in
          <span
            style={{
              background: "linear-gradient(135deg, #a89cf0 0%, #7c6fec 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline",
            }}
          >
            {" "}
            touch.
          </span>
        </h1>
        <p
          style={{ color: theme.foreground }}
          className="text-base max-w-lg leading-relaxed"
        >
          Open to new opportunities and always happy to connect. Reach out via
          any of the channels below.
        </p>
      </motion.div>

      {/* ── Contact cards ── */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {CONTACT_CARDS.map(({ label, value, href, icon }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex items-center gap-4 p-4 rounded-xl border no-underline group"
            style={{
              background: isDark
                ? "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)"
                : "linear-gradient(145deg, #ffffff 0%, #f8f8fc 100%)",
              borderColor: isDark
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.08)",
              boxShadow:
                "0 1px 1px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.1)",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(124,111,236,0.4)";
              e.currentTarget.style.boxShadow =
                "0 0 0 1px rgba(124,111,236,0.2), 0 8px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isDark
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.08)";
              e.currentTarget.style.boxShadow =
                "0 1px 1px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.1)";
            }}
          >
            {/* Icon bubble */}
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
              style={{
                background: "rgba(124,111,236,0.1)",
                color: "#a89cf0",
              }}
            >
              {icon}
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p
                className="text-xs font-mono tracking-wider uppercase mb-0.5"
                style={{ color: theme.foreground }}
              >
                {label}
              </p>
              <p
                className="text-sm font-medium truncate"
                style={{ color: theme.cardTitle }}
              >
                {value}
              </p>
            </div>

            {/* Arrow */}
            <div
              className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: "#7c6fec" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* ── Resume section ── */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "#7c6fec" }}
          >
            Résumé
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(124,111,236,0.2)" }}
          />
          {/* Download button inline with label */}
          <motion.a
            href="./resume.pdf"
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white no-underline flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #7c6fec 0%, #a89cf0 100%)",
              boxShadow: "0 0 20px rgba(124,111,236,0.3)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 1v9m0 0L5 7m3 3l3-3M2 12v2a1 1 0 001 1h10a1 1 0 001-1v-2"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download
          </motion.a>
        </div>

        {/* PDF viewer — capped at 750px */}
        <div className="flex justify-center">
          <div
            ref={pdfRef}
            className="w-full overflow-x-auto rounded-2xl border"
            style={{
              maxWidth: "750px",
              borderColor: isDark
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.08)",
              background: isDark
                ? "rgba(255,255,255,0.02)"
                : "rgba(0,0,0,0.02)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
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
      </motion.div>
    </motion.div>
  );
}

export default Contact;
