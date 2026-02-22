import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function BlockQuote({
  bodyStrings,
  footerText,
  footerHref,
  footerDecorationText,
}) {
  const { theme, isDark } = useContext(ThemeContext);

  return (
    <div
      className="relative rounded-2xl p-8 border overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(145deg, rgba(124,111,236,0.06) 0%, rgba(124,111,236,0.02) 100%)"
          : "linear-gradient(145deg, rgba(124,111,236,0.04) 0%, rgba(255,255,255,0.8) 100%)",
        borderColor: "rgba(124,111,236,0.2)",
      }}
    >
      {/* Large quote mark decoration */}
      <div
        className="absolute top-4 left-6 font-display text-8xl leading-none select-none pointer-events-none"
        style={{ color: "rgba(124,111,236,0.12)", fontStyle: "italic" }}
      >
        "
      </div>

      <div className="relative z-10">
        {/* Quote body */}
        <div className="space-y-3 mb-6">
          {bodyStrings.map((str, index) => (
            <p
              key={str}
              className="leading-relaxed"
              style={{
                fontSize: index === 0 ? "15px" : "14px",
                color: index === 0 ? theme.cardTitle : theme.foreground,
                fontStyle: index === 0 ? "italic" : "normal",
              }}
            >
              {str}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex items-center gap-3 pt-4 border-t"
          style={{ borderColor: "rgba(124,111,236,0.15)" }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #7c6fec, #a89cf0)" }}
          >
            N
          </div>
          <div>
            <a
              href={footerHref}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium no-underline hover:underline"
              style={{ color: "#a89cf0" }}
            >
              {footerText}
            </a>
            <p className="text-xs mt-0.5" style={{ color: theme.foreground }}>
              {footerDecorationText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockQuote;
