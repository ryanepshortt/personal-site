import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ThemeContext from "../../contexts/ThemeContext";
import Header from "../../components/header/Header";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: "easeIn" } },
};

function PageContent({ path }) {
  switch (path) {
    case "/about":
      return <About />;
    case "/projects":
      return <Projects />;
    case "/contact":
      return <Contact />;
    default:
      return <About />;
  }
}

function Home() {
  const { theme, isDark } = useContext(ThemeContext);
  const location = useLocation();

  // Redirect "/" → "/about"
  if (location.pathname === "/") {
    return <Navigate to="/about" replace />;
  }

  return (
    <div
      className="min-h-screen grain"
      style={{
        background: theme.background,
        color: theme.foreground,
        transition: theme.transition,
      }}
    >
      {/* Hero glow blobs */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,111,236,0.15) 0%, transparent 70%)"
            : "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,111,236,0.08) 0%, transparent 70%)",
        }}
      />

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <PageContent path={location.pathname} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default Home;
