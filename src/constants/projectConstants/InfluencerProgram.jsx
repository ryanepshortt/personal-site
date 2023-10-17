import React from "react";
import verified from "../../assets/avifs/verified.avif";
import python from "../../assets/avifs/python.avif";
import mongoDB from "../../assets/avifs/mongoDB.avif";
import aws from "../../assets/avifs/aws.avif";
import awsIcon from "../../assets/avifs/awsIcon.avif";
import rest from "../../assets/avifs/restAPI.avif";
import unified from "../../assets/avifs/unified.avif";
import react from "../../assets/avifs/react.avif";
import redux from "../../assets/avifs/redux.avif";
import typescript from "../../assets/avifs/typescript.avif";

export default {
  titleInfo: {
    title: "Influencer Program (Wish)",
  },
  body: () => (
    <>
      <p>
        Led the software architecture and implementation of Wish's influencer
        program, successfully scaling it to over 1000 influencers.
      </p>
      <p>
        As the full-stack software engineer on the team, I was responsible for
        designing and implementing the REST APIs accessible to iOS, Android, and
        Web, as well as the frontend work such as admin management pages and
        influencer-specific features.
      </p>
      <p>
        Additionally, I designed and implemented a network of asynchronous jobs
        to streamline influencer management and provide our data scientists with
        in-depth influencer post data.
      </p>
    </>
  ),
  imageInfo: {
    img: verified,
    alt: "Verified User Symbol",
  },
  techList: [
    {
      img: python,
      tooltip: "Python",
    },
    {
      img: mongoDB,
      tooltip: "MongoDB",
    },
    {
      img: aws,
      darkImg: awsIcon,
      tooltip: "Amazon Web Services",
    },
    {
      img: rest,
      tooltip: "REST API",
    },
    {
      img: unified,
      tooltip: "API accessible to web, iOS, and Android",
    },
    {
      img: react,
      tooltip: "React",
    },
    {
      img: redux,
      tooltip: "Redux",
    },
    {
      img: typescript,
      tooltip: "Typescript",
    },
  ],
};
