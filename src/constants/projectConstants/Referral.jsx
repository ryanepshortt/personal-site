import React from "react";
import growth from "../../assets/avifs/growth.avif";
import python from "../../assets/avifs/python.avif";
import mongoDB from "../../assets/avifs/mongoDB.avif";
import aws from "../../assets/avifs/aws.avif";
import awsIcon from "../../assets/avifs/awsIcon.avif";
import rest from "../../assets/avifs/restAPI.avif";
import sql from "../../assets/avifs/sql.avif";
import prometheus from "../../assets/avifs/prometheus.avif";
import unified from "../../assets/avifs/unified.avif";
import grafana from "../../assets/svgs/grafana.svg";

export default {
  titleInfo: {
    title: "Referral Program (Wish)",
  },
  body: () => (
    <>
      <p>
        Led the software architecture and implementation of Wish’s user-to-user
        referral rewards program, a project requiring close collaboration with
        numerous cross-functional teams.
      </p>
      <p>
        My meticulously designed software, real-time monitoring systems, and
        transparent decision-making process, ensured the timely delivery of a
        successful program while minimizing fraud exposure.
      </p>
    </>
  ),
  imageInfo: {
    img: growth,
    alt: "Upwards Trajectory Chart",
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
      img: sql,
      tooltip: "SQL",
    },
    {
      img: grafana,
      tooltip: "Grafana",
    },
    {
      img: prometheus,
      tooltip: "Prometheus",
    },
  ],
};
