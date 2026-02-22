import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../contexts/ThemeContext";

const tileVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectTile({ projectInfo }) {
  const { theme, isDark } = useContext(ThemeContext);
  const { titleInfo, imageInfo, techList, body } = projectInfo;

  return (
    <motion.div
      variants={tileVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border"
      style={{
        background: isDark
          ? "linear-gradient(145deg, rgba(30,30,40,0.9) 0%, rgba(22,22,29,0.95) 100%)"
          : "linear-gradient(145deg, #ffffff 0%, #f8f8fc 100%)",
        borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
        boxShadow: "0 1px 1px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.2)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 0 1px rgba(124,111,236,0.35), 0 16px 48px rgba(0,0,0,0.4)";
        e.currentTarget.style.borderColor = "rgba(124,111,236,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 1px 1px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.2)";
        e.currentTarget.style.borderColor = isDark
          ? "rgba(255,255,255,0.06)"
          : "rgba(0,0,0,0.08)";
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={imageInfo.img}
          alt={imageInfo.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-display text-lg font-bold mb-3 leading-tight"
          style={{ color: theme.cardTitle }}
        >
          {titleInfo?.href ? (
            <a
              href={titleInfo.href}
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline"
              style={{ color: "inherit" }}
            >
              {titleInfo.title}
              <span
                className="ml-1.5 text-xs align-middle opacity-60"
                style={{ color: "#7c6fec" }}
              >
                ↗
              </span>
            </a>
          ) : (
            titleInfo.title
          )}
        </h3>

        <div
          className="text-sm leading-relaxed flex-1"
          style={{ color: theme.foreground }}
        >
          {body()}
        </div>

        {/* Tech icons */}
        <div
          className="flex flex-wrap gap-2 pt-4 mt-4 border-t"
          style={{
            borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
          }}
        >
          {techList.map(({ img, darkImg, tooltip }) => (
            <div key={tooltip} title={tooltip} className="relative group/icon">
              <img
                src={isDark && darkImg ? darkImg : img}
                alt={tooltip}
                className="w-6 h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
              {/* Tooltip */}
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 text-xs rounded-md whitespace-nowrap opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 pointer-events-none"
                style={{
                  background: isDark ? "#1e1e28" : "#ffffff",
                  color: theme.cardTitle,
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid rgba(0,0,0,0.1)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                {tooltip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectTile;
