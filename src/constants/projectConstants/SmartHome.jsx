import React from "react";
import smartHome from "../../assets/avifs/smartHome.avif";
import react from "../../assets/avifs/react.avif";
import javascript from "../../assets/avifs/javascript.avif";
import postgres from "../../assets/avifs/postgres.avif";
import formik from "../../assets/avifs/formik.avif";
import redux from "../../assets/avifs/redux.avif";
import node from "../../assets/avifs/node.avif";
import d3 from "../../assets/avifs/d3.avif";
import aws from "../../assets/avifs/aws.avif";
import awsIcon from "../../assets/avifs/awsIcon.avif";

export default {
  titleInfo: {
    title: "Smart Home Microsite",
  },
  body: () => (
    <>
      <p>
        Designed and implemented a smart home microsite for a
        <span className="uk-text-bold"> McMaster-partnered company</span>. This
        was my 4th year capstone project where and I had to interview for the
        opportunity to work with this company.
      </p>
      <p>
        The application administers distributed control over hardware nodes in a
        client-server infrastructure. I was responsible for the development of
        the UI, as well as helping to design the REST API layer using Express
        and Postgres. The app was deployed in AWS.
      </p>
    </>
  ),
  imageInfo: {
    img: smartHome,
    alt: "Smart Home App",
  },
  techList: [
    {
      img: javascript,
      tooltip: "Javascript",
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
      img: redux,
      tooltip: "Redux",
    },
    {
      img: aws,
      darkImg: awsIcon,
      tooltip: "AWS",
    },
    {
      img: node,
      tooltip: "NodeJs",
    },
    {
      img: formik,
      tooltip: "Formik",
    },
    {
      img: d3,
      tooltip: "D3 Charts",
    },
  ],
};
