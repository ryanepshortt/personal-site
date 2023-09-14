import React from "react";
import boogie from "../../assets/avifs/boogie.avif";
import javascript from "../../assets/avifs/javascript.avif";
import html from "../../assets/avifs/html.avif";
import css from "../../assets/avifs/css.avif";
import jq from "../../assets/avifs/jquery.avif";
import jqLight from "../../assets/avifs/jqueryLight.avif";
import googleMaps from "../../assets/avifs/googleMaps.avif";

export default {
  titleInfo: {
    title: "Musician Social Media Site",
  },
  body: () => (
    <>
      <p>
        Developed a music-themed social-media website where users could
        advertise their own skills, upcoming events, or shows. This was my first
        time using basic web development tools such as Javascript and JQuery.
        The site used an embedded
        <span className="uk-text-bold"> Google Maps API </span> which showed the
        location of the most recently clicked on event.
      </p>
      <p>
        Since this was my first web development project I wanted to do all the
        styling and javascript development myself without the use of any
        frameworks or UI kits so that I could develop strong fundamental JS and
        CSS skills.
      </p>
    </>
  ),
  imageInfo: {
    img: boogie,
    alt: "Boogie Screenshot",
  },
  techList: [
    {
      img: javascript,
      tooltip: "Javascript",
    },
    {
      img: html,
      tooltip: "HTML5",
    },
    {
      img: css,
      tooltip: "CSS",
    },
    {
      img: googleMaps,
      tooltip: "Google Maps API",
    },
    {
      img: jqLight,
      darkImg: jq,
      tooltip: "JQuery",
    },
  ],
};
