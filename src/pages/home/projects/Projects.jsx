import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../../contexts/ThemeContext";
import ProjectInfo from "../../../constants/projectConstants/ProjectConstants";
import ProjectTile from "../../../components/projectTile/ProjectTile";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {/* Page header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "#7c6fec" }}
          >
            Selected work
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
          Things I've
          <span
            style={{
              background: "linear-gradient(135deg, #a89cf0 0%, #7c6fec 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline",
            }}
          >
            {" "}
            built.
          </span>
        </h1>
        <p
          className="text-base max-w-xl leading-relaxed"
          style={{ color: theme.foreground }}
        >
          A collection of projects spanning full-stack web, machine learning,
          and infrastructure tooling.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {ProjectInfo.map((projectInfo) => (
          <ProjectTile
            key={projectInfo.titleInfo.title}
            projectInfo={projectInfo}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
