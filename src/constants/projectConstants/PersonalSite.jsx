import React from "react";
import personalSite from "../../assets/avifs/personalSite.avif";
import react from "../../assets/avifs/react.avif";
import javascript from "../../assets/avifs/javascript.avif";
import aws from "../../assets/avifs/aws.avif";
import awsIcon from "../../assets/avifs/awsIcon.avif";
import css from "../../assets/avifs/css.avif";

export default {
  titleInfo: { title: "ryanshortt.ca" },
  body: () => (
    <p>
      This is the site you're looking at now! Developed using React and NodeJs,
      with a dark-premium redesign featuring Tailwind CSS, Framer Motion
      animations, and proper React Router routing. Hosted in a CI/CD pipeline in
      AWS. The code repository can be found{" "}
      <a
        href="https://github.com/ryanepshortt/personal-site"
        className="text-accent-light hover:underline"
      >
        here
      </a>
      .
    </p>
  ),
  imageInfo: { img: personalSite, alt: "ryanshortt.ca screenshot" },
  techList: [
    { img: javascript, tooltip: "Javascript" },
    { img: react, tooltip: "React" },
    { img: aws, darkImg: awsIcon, tooltip: "Amazon Web Services" },
    { img: css, tooltip: "CSS" },
  ],
};
