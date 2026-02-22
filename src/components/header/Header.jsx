import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeContext from "../../contexts/ThemeContext";
import AnimatedIcon from "../animatedIcon/AnimatedIcon";

const NAV_ITEMS = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const location = useLocation();

  // Treat "/" same as "/about"
  const activePath = location.pathname === "/" ? "/about" : location.pathname;

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: isDark ? "rgba(8,8,12,0.8)" : "rgba(244,244,248,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: isDark
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          to="/about"
          className="group flex items-center gap-3 no-underline"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #7c6fec 0%, #a89cf0 100%)",
              boxShadow: "0 0 20px rgba(124,111,236,0.4)",
            }}
          >
            R
          </div>
          <span
            className="font-display font-bold text-lg tracking-tight"
            style={{ color: isDark ? "#e8e8f0" : "#0f0f14" }}
          >
            Ryan Shortt
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          <div className="relative flex items-center bg-white/[0.04] rounded-full p-1 border border-white/[0.06]">
            {NAV_ITEMS.map(({ label, path }) => {
              const isActive = activePath === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 no-underline z-10"
                  style={{
                    // eslint-disable-next-line no-nested-ternary
                    color: isActive
                      ? "#ffffff"
                      : isDark
                      ? "#8888aa"
                      : "#6666aa",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full z-[-1]"
                      style={{
                        background:
                          "linear-gradient(135deg, #7c6fec 0%, #a89cf0 100%)",
                        boxShadow: "0 0 20px rgba(124,111,236,0.4)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="ml-2">
            <AnimatedIcon />
          </div>
        </nav>

        {/* Mobile right side */}
        <div className="flex sm:hidden items-center gap-3">
          <AnimatedIcon />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px rounded-full"
              style={{ background: isDark ? "#e8e8f0" : "#0f0f14" }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-px rounded-full"
              style={{ background: isDark ? "#e8e8f0" : "#0f0f14" }}
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="block w-5 h-px rounded-full"
              style={{ background: isDark ? "#e8e8f0" : "#0f0f14" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              borderTop: isDark
                ? "1px solid rgba(255,255,255,0.06)"
                : "1px solid rgba(0,0,0,0.08)",
              background: isDark
                ? "rgba(15,15,20,0.95)"
                : "rgba(244,244,248,0.95)",
            }}
            className="sm:hidden overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map(({ label, path }) => {
                const isActive = activePath === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm font-medium transition-colors no-underline"
                    style={{
                      // eslint-disable-next-line no-nested-ternary
                      color: isActive
                        ? "#a89cf0"
                        : isDark
                        ? "#8888aa"
                        : "#6666aa",
                      background: isActive
                        ? "rgba(124,111,236,0.1)"
                        : "transparent",
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
