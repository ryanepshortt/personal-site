import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../contexts/ThemeContext";

function ExperienceTile({
  imageSource,
  company,
  title,
  dates,
  size,
  hasPadding,
}) {
  const { theme, isDark } = useContext(ThemeContext);
  const isSmall = size === "small";
  const isBanner = !isSmall; // McMaster full-width banner style

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative overflow-hidden rounded-xl border"
      style={{
        background: isDark
          ? "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)"
          : "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
        borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
        boxShadow: isDark
          ? "0 1px 1px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3)"
          : "0 1px 1px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      {isBanner ? (
        // ── Full-width banner (McMaster) ──
        <div className="w-full overflow-hidden" style={{ height: "200px" }}>
          <img
            src={imageSource}
            alt={`${company}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
      ) : (
        // ── Small logo card (employers) ──
        <div
          className="w-full flex items-center justify-center"
          style={{
            padding: hasPadding ? "20px" : "0",
            minHeight: "100px",
            background: isDark ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.5)",
          }}
        >
          <img
            src={imageSource}
            alt={`${company} logo`}
            style={{
              maxHeight: "56px",
              maxWidth: "80%",
              objectFit: "contain",
            }}
          />
        </div>
      )}

      {/* Info bar */}
      <div
        className="px-4 py-3 border-t"
        style={{
          borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
          background: isDark ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.6)",
          backdropFilter: "blur(8px)",
        }}
      >
        <p
          className="font-medium leading-tight mb-0.5"
          style={{
            fontSize: isSmall ? "11px" : "14px",
            color: theme.cardTitle,
          }}
        >
          <span className="font-semibold">{company}</span>
          {" · "}
          <span style={{ color: theme.foreground }}>{title}</span>
        </p>
        <p
          className="leading-none"
          style={{
            fontSize: isSmall ? "10px" : "12px",
            color: "#7c6fec",
          }}
        >
          {dates}
        </p>
      </div>
    </motion.div>
  );
}

export default ExperienceTile;
