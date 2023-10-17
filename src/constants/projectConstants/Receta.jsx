import React from "react";
import receta from "../../assets/avifs/receta.avif";
import lighthouse from "../../assets/avifs/lighthouse.avif";
import vercel from "../../assets/svgs/vercel.svg";
import scss from "../../assets/svgs/scss.svg";
import typescript from "../../assets/avifs/typescript.avif";
import react from "../../assets/avifs/react.avif";
import nextjs from "../../assets/avifs/next.avif";
import postgres from "../../assets/avifs/postgres.avif";
import prisma from "../../assets/avifs/prisma.avif";

export default {
  titleInfo: {
    title: "Receta",
    href: "https://receta.vercel.app",
  },
  body: () => (
    <>
      <p>
        Receta is a recipe sharing Typescript app deployed using Vercel. The app
        was built using NextJS + React on the frontend, along with a
        Prisma/Postgres backend. All components were styled without the use of
        any prebuilt UI packages.
      </p>
      <p>
        In an attempt to make the site as performant as possible, I Integrated
        Google Lighthouse audits into the Vercel-Github CI/CD pipeline. The app
        now boasts impressive web vitals scores for performance, accessibility,
        best practices, SEO, and PWA.
      </p>
      <p>
        Check out the{" "}
        <a href="https://receta.vercel.app" target="_blank">
          website
        </a>{" "}
        (log in using <b>demo/demo</b> or create your own account) as well as
        the{" "}
        <a href="https://github.com/ShorttRyan/receta" target="_blank">
          repo / documentation
        </a>
        .
      </p>
    </>
  ),
  imageInfo: {
    img: receta,
    alt: "Receta Screenshot",
  },
  techList: [
    {
      img: typescript,
      tooltip: "Typescript",
    },
    {
      img: react,
      tooltip: "React",
    },
    {
      img: postgres,
      tooltip: "Postgres",
    },
    {
      img: prisma,
      tooltip: "Prisma",
    },
    {
      img: nextjs,
      tooltip: "NextJS",
    },
    {
      img: vercel,
      tooltip: "vercel",
    },
    {
      img: lighthouse,
      tooltip: "Lighthouse",
    },
    {
      img: scss,
      tooltip: "SCSS",
    },
  ],
};
