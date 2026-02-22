import React, { useEffect, useState, useContext, useRef } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../../contexts/ThemeContext";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BlockQuote from "../../../components/blockQuote/BlockQuote";
import ExperienceTile from "../../../components/experienceTile/ExperienceTile";
import { QUOTE_STRINGS, YOUTUBE_LINKS } from "../../../constants/AppConstants";

// ── Asset imports (paths unchanged from original) ──
import mcmasterImgWide from "../../../assets/avifs/mcmaster.avif";
import mcmasterImgSmall from "../../../assets/avifs/mcMasterOrig.avif";
import orium from "../../../assets/avifs/orium.avif";
import wish from "../../../assets/avifs/wish.avif";
import awn from "../../../assets/avifs/arcticwolf.avif";
import ciena from "../../../assets/avifs/ciena.avif";
import songImg from "../../../assets/avifs/ryanSong.avif";
import pianoImg from "../../../assets/avifs/ryanPiano.avif";
import golfImg from "../../../assets/avifs/ryanSwing.avif";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const MEDIA_THUMBNAILS = [
  { src: songImg, alt: "Singing thumbnail", label: "Singing", index: 1 },
  { src: pianoImg, alt: "Piano thumbnail", label: "Piano", index: 2 },
  { src: golfImg, alt: "Golf thumbnail", label: "Golf", index: 3 },
];

const EXPERIENCE = [
  {
    src: awn,
    company: "Arctic Wolf",
    title: "Senior Software Developer",
    dates: "Dec 2023 – Present",
  },
  {
    src: wish,
    company: "Wish",
    title: "Fullstack Software Engineer",
    dates: "July 2022 – August 2023",
  },
  {
    src: orium,
    company: "Orium",
    title: "Software Engineer",
    dates: "May 2021 – July 2022",
  },
  {
    src: ciena,
    company: "Ciena",
    title: "Automation Tools Developer (Co-Op)",
    dates: "May 2019 – May 2020",
  },
];

function About() {
  const { width } = useWindowDimensions();
  const [displayImg, setDisplayImg] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const { theme, isDark } = useContext(ThemeContext);
  const playerRef = useRef(null);

  // Fix: image loading in useEffect, not component body
  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setTimeout(() => setLoaded(true), 80);
    img.src = width > 960 ? mcmasterImgWide : mcmasterImgSmall;
  }, [width]);

  const onSetDisplayImage = (index) => {
    if (playerRef.current && displayImg !== index) {
      playerRef.current.src = YOUTUBE_LINKS[index];
      setDisplayImg(index);
    }
  };

  if (!loaded) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: "calc(100vh - 160px)" }}
      >
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-accent"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-20"
    >
      {/* ── HERO ── */}
      <motion.section variants={itemVariants} className="pt-4">
        <div className="mb-3">
          <span
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full border"
            style={{
              color: "#a89cf0",
              borderColor: "rgba(124,111,236,0.3)",
              background: "rgba(124,111,236,0.08)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </span>
        </div>
        <h1
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
          style={{ color: theme.cardTitle }}
        >
          Full Stack
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #a89cf0 0%, #7c6fec 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Engineer.
          </span>
        </h1>
        <p
          className="text-lg max-w-xl leading-relaxed"
          style={{ color: theme.foreground }}
        >
          I build high-quality products with a focus on clean architecture and
          exceptional user experience. Pianist, golfer, and the biggest Chelsea
          FC fan in North America.
        </p>
      </motion.section>

      {/* ── EDUCATION ── */}
      <motion.section variants={itemVariants}>
        <SectionLabel>Education</SectionLabel>
        <ExperienceTile
          imageSource={width <= 960 ? mcmasterImgSmall : mcmasterImgWide}
          company="McMaster University"
          title="Computer Engineering Co-Op (2016–2021)"
          dates="Dean's List: 3A, 3B, 4A, 4B"
        />
      </motion.section>

      {/* ── EXPERIENCE ── */}
      <motion.section variants={itemVariants}>
        <SectionLabel>Experience</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {EXPERIENCE.map(({ src, company, title, dates }) => (
            <ExperienceTile
              key={company}
              imageSource={src}
              company={company}
              title={title}
              dates={dates}
              size="small"
              hasPadding
            />
          ))}
        </div>
      </motion.section>

      {/* ── TESTIMONIAL ── */}
      <motion.section variants={itemVariants}>
        <BlockQuote
          bodyStrings={QUOTE_STRINGS}
          footerHref="https://www.linkedin.com/in/ryan-shortt"
          footerText="Nicole White — Product Manager @ Wish"
          footerDecorationText="See recommendations section"
        />
      </motion.section>

      {/* ── PROFILE / MEDIA ── */}
      <motion.section variants={itemVariants}>
        <SectionLabel>Profile</SectionLabel>
        <p
          className="text-base leading-relaxed max-w-2xl mb-10"
          style={{ color: theme.foreground }}
        >
          An avid pianist, guitar player and singer — I've been fortunate to
          play at various events. I grew up playing competitive hockey and golf,
          and now coach my local softball team every summer.
        </p>

        {/* Main video player */}
        <div
          className="rounded-2xl overflow-hidden mb-6 border"
          style={{
            borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
          }}
        >
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              ref={playerRef}
              src={YOUTUBE_LINKS[0]}
              title="Video player"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="grid grid-cols-3 gap-3">
          {MEDIA_THUMBNAILS.map(({ src, alt, label, index }) => (
            <button
              key={index}
              type="button"
              onClick={() => onSetDisplayImage(index)}
              className="relative group overflow-hidden rounded-xl border transition-all duration-300 focus:outline-none"
              style={{
                borderColor:
                  // eslint-disable-next-line no-nested-ternary
                  displayImg === index
                    ? "rgba(124,111,236,0.6)"
                    : isDark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.08)",
                boxShadow:
                  displayImg === index
                    ? "0 0 20px rgba(124,111,236,0.3)"
                    : "none",
              }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover aspect-video transition-transform duration-500 group-hover:scale-105"
                style={{ opacity: displayImg === index ? 0.5 : 0.8 }}
              />
              <div className="absolute inset-0 flex items-end p-3">
                <span
                  className="text-xs font-medium text-white px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {label}
                </span>
              </div>
              {displayImg === index && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(124,111,236,0.8)" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="white"
                    >
                      <path d="M4 2l6 4-6 4V2z" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="text-xs font-mono tracking-widest uppercase"
        style={{ color: "#7c6fec" }}
      >
        {children}
      </span>
      <div
        className="flex-1 h-px"
        style={{ background: "rgba(124,111,236,0.2)" }}
      />
    </div>
  );
}

export default About;
