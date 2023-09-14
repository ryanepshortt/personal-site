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
        best practices, SEO, & PWA.
      </p>
      <p>
        The app is packed with features, I encourage you to check out the{" "}
        <a href="https://receta.vercel.app" target="_blank">
          website
        </a>{" "}
        (you can log into an existing account using <b>demo/demo</b> as the
        username/password) along with the{" "}
        <a href="https://github.com/ShorttRyan/receta" target="_blank">
          repo & design documentation
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
