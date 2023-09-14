import personalSite from "../../assets/avifs/personalSite.avif";
import react from "../../assets/avifs/react.avif";
import javascript from "../../assets/avifs/javascript.avif";
import aws from "../../assets/avifs/aws.avif";
import awsIcon from "../../assets/avifs/awsIcon.avif";
import css from "../../assets/avifs/css.avif";

export default {
  titleInfo: {
    title: "ryanshortt.ca",
  },
  body: () => (
    <p>
      This is the site you're looking at now! It was developed using React and
      NodeJs. React hooks allowed me to implement things such as the dark theme
      toggle button in the header. Additionally, I used react-spring, and UIKit
      to create a responsive site with smooth transitions. This site is hosted
      in a CI/CD pipeline in AWS, and the code repository can be found{" "}
      <span>
        <a
          href="https://github.com/ryanepshortt/personal-site"
          className="uk-link"
        >
          here
        </a>
      </span>
      .
    </p>
  ),
  imageInfo: {
    img: personalSite,
    alt: "ryanshortt.ca screenshot",
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
      img: aws,
      darkImg: awsIcon,
      tooltip: "AWS",
    },
    {
      img: css,
      tooltip: "CSS",
    },
  ],
};
