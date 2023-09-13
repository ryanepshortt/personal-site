import React from "react";
import ThemeContext from "../../themeContext/ThemeContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./Projects.css";

import smartHome from "../../assets/avifs/smartHome.avif";
import boogie from "../../assets/avifs/boogie.avif";
import homeValue from "../../assets/avifs/homeValue.avif";
import neuralNet from "../../assets/avifs/neuralNet.avif";
import serverRoom from "../../assets/avifs/serverRoom.avif";
import personalSite from "../../assets/avifs/personalSite.avif";
import receta from "../../assets/avifs/receta.avif";
import ReactIcon from "../../assets/avifs/react.avif";
import pythonIcon from "../../assets/avifs/python.avif";
import formikIcon from "../../assets/avifs/formik.avif";
import postgresIcon from "../../assets/avifs/postgres.avif";
import reduxIcon from "../../assets/avifs/redux.avif";
import awsIcon from "../../assets/avifs/aws.avif";
import npmIcon from "../../assets/avifs/node.avif";
import mapsIcon from "../../assets/avifs/googleMaps.avif";
import htmlIcon from "../../assets/avifs/html.avif";
import cssIcon from "../../assets/avifs/css.avif";
import jsIcon from "../../assets/avifs/javascript.avif";
import jqIcon from "../../assets/avifs/jquery.avif";
import jqIconLight from "../../assets/avifs/jqueryLight.avif";
import numpyIcon from "../../assets/avifs/numpy.avif";
import uiKitIcon from "../../assets/avifs/uiKit.avif";
import d3Icon from "../../assets/avifs/d3.avif";
import tclIcon from "../../assets/avifs/tcl.avif";
import jenkinsIcon from "../../assets/avifs/jenkins.avif";
import bashIcon from "../../assets/avifs/bash.avif";
import nextjs from "../../assets/avifs/next.avif";
import prisma from "../../assets/avifs/prisma.avif";
import lighthouse from "../../assets/avifs/lighthouse.avif";
import vercel from "../../assets/svgs/vercel.svg";
import jwt from "../../assets/svgs/jwt.svg";
import scss from "../../assets/svgs/scss.svg";

const Projects = () => {
  const { width } = useWindowDimensions();
  const { theme, dark } = React.useContext(ThemeContext);
  return (
    <div className={"uk-animation-fade"}>
      <div
        className={` uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@l uk-grid-match`}
        data-uk-grid
        data-uk-height-match="target: > div > div > .footer-wrapper"
      >
        <div>
          <div
            className="uk-card uk-card-default custom-card"
            style={{
              background: theme.cardBackground,
              color: theme.foreground,
              transition: theme.transition,
            }}
          >
            <div className="uk-card-media-top media-card custom-image">
              <img
                className="uk-animation-fade"
                src={receta}
                alt="Receta Screenshot"
              />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title" style={{ color: theme.cardTitle }}>
                <a href="http://receta.vercel.app" target="_blank">
                  Receta
                </a>
              </h3>
              <p>
                Receta is a recipe sharing app deployed using Vercel. The app
                was built using NextJS, along with a Prisma/Postgres backend.
                All components were built using pure JSX/SCSS without the use of
                any prebuilt UI packages.
              </p>
              <p>
                In an attempt to make the site as performant as possible, I
                Integrated Google Lighthouse audits into the Vercel-Github CI/CD
                pipeline. The app now boasts impressive web vitals scores for
                performance, accessibility, best practices, SEO, & PWA.
              </p>
              <p>
                This project is still in development, but the code repo and
                design documentation can be found{" "}
                <a href="https://github.com/ShorttRyan/receta" target="_blank">
                  here
                </a>
                .
              </p>
            </div>
            <div className="footer-wrapper">
              <div className="uk-card-footer">
                <div className="icons">
                  {width > 707 || (width < 640 && width > 335) ? (
                    <span>
                      <p className="uk-text-center">
                        <img
                          className="tech-icon"
                          src={ReactIcon}
                          alt="react icon"
                          data-uk-tooltip="React"
                        />
                        <img
                          className="tech-icon"
                          src={prisma}
                          alt="prisma icon"
                          data-uk-tooltip="Prisma"
                        />
                        <img
                          className="tech-icon"
                          src={postgresIcon}
                          alt="postgres icon"
                          data-uk-tooltip="Postgres"
                        />
                        <img
                          className="tech-icon"
                          src={nextjs}
                          alt="nextjs icon"
                          data-uk-tooltip="NextJS"
                        />
                      </p>
                      <p className="uk-text-center">
                        <img
                          className="tech-icon"
                          src={vercel}
                          alt="vercel icon"
                          data-uk-tooltip="Vercel"
                        />
                        <img
                          className="tech-icon"
                          src={jwt}
                          alt="JWT icon"
                          data-uk-tooltip="JWT"
                        />
                        <img
                          className="tech-icon"
                          src={lighthouse}
                          alt="lighthouse icon"
                          data-uk-tooltip="Google Lighthouse"
                        />
                        <img
                          className="tech-icon"
                          src={scss}
                          alt="SCSS icon"
                          data-uk-tooltip="SCSS"
                        />
                      </p>
                    </span>
                  ) : (
                    <p className="uk-text-center">
                      <img
                        className="tech-icon"
                        src={ReactIcon}
                        alt="react icon"
                        data-uk-tooltip="React"
                      />
                      <img
                        className="tech-icon"
                        src={postgresIcon}
                        alt="postgres icon"
                        data-uk-tooltip="Postgres"
                      />
                      <img
                        className="tech-icon"
                        src={nextjs}
                        alt="nextjs icon"
                        data-uk-tooltip="NextJS"
                      />
                      <img
                        className="tech-icon"
                        src={vercel}
                        alt="vercel icon"
                        data-uk-tooltip="Vercel"
                      />
                      <img
                        className="tech-icon"
                        src={jwt}
                        alt="JWT icon"
                        data-uk-tooltip="JWT"
                      />
                      <img
                        className="tech-icon"
                        src={lighthouse}
                        alt="lighthouse icon"
                        data-uk-tooltip="Google Lighthouse"
                      />
                      <img
                        className="tech-icon"
                        src={scss}
                        alt="SCSS icon"
                        data-uk-tooltip="SCSS"
                      />
                      <img
                        className="tech-icon"
                        src={prisma}
                        alt="prisma icon"
                        data-uk-tooltip="Prisma"
                      />
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-default custom-card"
            style={{
              background: theme.cardBackground,
              color: theme.foreground,
              transition: theme.transition,
            }}
          >
            <div className="uk-card-media-top media-card custom-image">
              <img
                classname="uk-animation-fade"
                src={smartHome}
                alt="Home App"
              />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title" style={{ color: theme.cardTitle }}>
                Smart Home Microsite
              </h3>
              <p>
                Designed and implemented a smart home microsite for a
                <span className="uk-text-bold">
                  {" "}
                  McMaster-partnered company
                </span>
                . This was my 4th year capstone project where and I had to
                interview for the opportunity to work with this company.
              </p>
              <p>
                The application administers distributed control over hardware
                nodes in a client-server infrastructure. I was responsible for
                the development of the UI, as well as helping to design the REST
                API layer using Express and Postgres. The app was deployed in
                AWS.
              </p>
            </div>
            <div className="footer-wrapper">
              <div className="uk-card-footer">
                <div className="icons">
                  {width > 707 || (width < 640 && width > 335) ? (
                    <span>
                      <p className="uk-text-center">
                        <img
                          className="tech-icon"
                          src={ReactIcon}
                          alt="react icon"
                          data-uk-tooltip="React"
                        />
                        <img
                          className="tech-icon"
                          src={reduxIcon}
                          alt="redux icon"
                          data-uk-tooltip="Redux"
                        />
                        <img
                          className="tech-icon"
                          src={postgresIcon}
                          alt="postgres icon"
                          data-uk-tooltip="Postgres"
                        />
                        <img
                          className="tech-icon"
                          src={awsIcon}
                          alt="aws icon"
                          data-uk-tooltip="Amazon Web Services"
                        />
                      </p>
                      <p className="uk-text-center">
                        <img
                          className="tech-icon"
                          src={npmIcon}
                          alt="npm icon"
                          data-uk-tooltip="NodeJS"
                        />
                        <img
                          className="tech-icon"
                          src={formikIcon}
                          alt="formik icon"
                          data-uk-tooltip="Formik"
                        />
                        <img
                          className="tech-icon"
                          src={uiKitIcon}
                          alt="uikit icon"
                          data-uk-tooltip="UiKit"
                        />
                        <img
                          className="tech-icon"
                          src={d3Icon}
                          alt="d3 icon"
                          data-uk-tooltip="D3.JS"
                        />
                      </p>
                    </span>
                  ) : (
                    <p className="uk-text-center">
                      <img
                        className="tech-icon"
                        src={ReactIcon}
                        alt="react icon"
                        data-uk-tooltip="React"
                      />
                      <img
                        className="tech-icon"
                        src={reduxIcon}
                        alt="redux icon"
                        data-uk-tooltip="Redux"
                      />
                      <img
                        className="tech-icon"
                        src={postgresIcon}
                        alt="postgres icon"
                        data-uk-tooltip="Postgres"
                      />
                      <img
                        className="tech-icon"
                        src={awsIcon}
                        alt="aws icon"
                        data-uk-tooltip="Amazon Web Services"
                      />
                      <img
                        className="tech-icon"
                        src={nodeIcon}
                        alt="npm icon"
                        data-uk-tooltip="NodeJS"
                      />
                      <img
                        className="tech-icon"
                        src={formikIcon}
                        alt="formik icon"
                        data-uk-tooltip="Formik"
                      />
                      <img
                        className="tech-icon"
                        src={uiKitIcon}
                        alt="uikit icon"
                        data-uk-tooltip="UiKit"
                      />
                      <img
                        className="tech-icon"
                        src={d3Icon}
                        alt="d3 icon"
                        data-uk-tooltip="D3.JS"
                      />
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-default custom-card"
            style={{
              background: theme.cardBackground,
              color: theme.foreground,
              transition: theme.transition,
            }}
          >
            <div className="uk-card-media-top media-card custom-image">
              <img
                classname="uk-animation-fade"
                src={serverRoom}
                alt="Hardware Lab"
              />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title" style={{ color: theme.cardTitle }}>
                Hardware Topology Diagnostics (Ciena)
              </h3>
              <p>
                Creator of a set of utilities allowing automation testing teams
                at Ciena to gather and email out in depth diagnostics on
                targeted hardware configurations in the lab. The tool would
                return values such as the number of CRC errors, packets lost and
                missing hardware nodes.
              </p>
              <p>
                The tool was integrated into our Jenkins Pipeline, where users
                could queue it to run before their test suites to ensure that
                the hardware topology under test would not produce unforeseen
                errors. This application would also halt any future tests on
                hardware topologies that could not meet sufficient health
                criteria.
              </p>
            </div>
            <div className="footer-wrapper">
              <div className="uk-card-footer">
                <div className="icons ciena-icons">
                  <p className="uk-text-center">
                    <img
                      className="tech-icon"
                      src={tclIcon}
                      alt="TCL icon"
                      data-uk-tooltip="TCL"
                    />
                    <img
                      className="tech-icon"
                      src={jenkinsIcon}
                      alt="Jenkins icon"
                      data-uk-tooltip="Jenkins"
                    />
                    <img
                      className="tech-icon"
                      src={bashIcon}
                      alt="Bash icon"
                      data-uk-tooltip="Bash"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-default custom-card"
            style={{
              background: theme.cardBackground,
              color: theme.foreground,
              transition: theme.transition,
            }}
          >
            <div className="uk-card-media-top media-card custom-image">
              <img
                classname="uk-animation-fade"
                src={boogie}
                alt="Boogie Screenshot"
              />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title" style={{ color: theme.cardTitle }}>
                Musician Social Media Site
              </h3>
              <p>
                Developed a music-themed social-media website where users could
                advertise their own skills, upcoming events, or shows. This was
                my first time using basic web development tools such as
                Javascript and JQuery. The site used an embedded
                <span className="uk-text-bold"> Google Maps API </span> which
                showed the location of the most recently clicked on event.
              </p>
              <p>
                Since this was my first web development project I wanted to do
                all the styling and javascript development myself without the
                use of any frameworks or UI kits so that I could develop strong
                fundamental JS and CSS skills.
              </p>
            </div>
            <div className="footer-wrapper">
              <div className="uk-card-footer">
                <div className="icons boogie-icons">
                  <p className="uk-text-center">
                    <img
                      className="tech-icon"
                      src={mapsIcon}
                      alt="google maps icon"
                      data-uk-tooltip="Google Maps"
                    />
                    <img
                      className="tech-icon"
                      src={htmlIcon}
                      alt="html icon"
                      data-uk-tooltip="HTML 5"
                    />
                    <img
                      className="tech-icon"
                      src={cssIcon}
                      alt="css icon"
                      data-uk-tooltip="CSS"
                    />
                    <img
                      className="tech-icon"
                      src={jsIcon}
                      alt="javascript icon"
                      data-uk-tooltip="JavaScript"
                    />
                    <img
                      className="tech-icon"
                      src={dark ? jqIconLight : jqIcon}
                      alt="JQuery icon"
                      data-uk-tooltip="JQuery"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-default custom-card"
            style={{
              background: theme.cardBackground,
              color: theme.foreground,
              transition: theme.transition,
            }}
          >
            <div className="uk-card-media-top media-card custom-image">
              <img classname="uk-animation-fade" src={homeValue} alt="Hous" />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title" style={{ color: theme.cardTitle }}>
                Home Value Estimator
              </h3>
              <p>
                Used various Python libraries to develop a home value estimator.
                The estimator was trained on the Boston housing dataset that can
                be found online. The dataset includes 506 examples with 13
                features each, such as the average number of rooms per dwelling,
                and the distance from the city center. I used basis expansion
                and K-Fold cross validation to gauge which features were most
                closely correlated to the associated target values.
              </p>
            </div>
            <div className="footer-wrapper">
              <div className="uk-card-footer">
                <div className="icons icons3">
                  <p className="uk-text-center">
                    <img
                      className="tech-icon"
                      src={pythonIcon}
                      alt="Python icon"
                      data-uk-tooltip="Python"
                    />
                    <img
                      className="tech-icon"
                      src={numpyIcon}
                      alt="Numpy icon"
                      data-uk-tooltip="NumPy"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-default custom-card"
            style={{
              background: theme.cardBackground,
              color: theme.foreground,
              transition: theme.transition,
            }}
          >
            <div className="uk-card-media-top media-card custom-image">
              <img
                classname="uk-animation-fade"
                src={neuralNet}
                alt="Neural Network"
              />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title" style={{ color: theme.cardTitle }}>
                Early Cancer Detector
              </h3>
              <p>
                Using Python, SciKit Learn, and the Wisconsin Breast Cancer
                dataset, I developed a neural network to classify breast tumors
                as either malignant or benign. The dataset consisted of over 500
                examples, each with 10 attributes such as radius, perimeter and
                area. My model was trained using stochastic gradient descent and
                a cross-entropy loss function.
              </p>
            </div>
            <div className="footer-wrapper">
              <div className="uk-card-footer">
                <div className="icons icons3">
                  <p className="uk-text-center">
                    <img
                      className="tech-icon"
                      src={pythonIcon}
                      alt="Python icon"
                      data-uk-tooltip="Python"
                    />
                    <img
                      className="tech-icon"
                      src={numpyIcon}
                      alt="Numpy icon"
                      data-uk-tooltip="NumPy"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-default custom-card"
            style={{
              background: theme.cardBackground,
              color: theme.foreground,
              transition: theme.transition,
            }}
          >
            <div className="uk-card-media-top media-card custom-image">
              <img
                classname="uk-animation-fade"
                src={personalSite}
                alt="Personal Site Screenshot"
              />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title" style={{ color: theme.cardTitle }}>
                Personal Site
              </h3>
              <p>
                This is the site you're looking at now! It was developed using
                React and NodeJs. React hooks allowed me to implement things
                such as the dark theme toggle button in the header.
                Additionally, I used react-spring, and UIKit to create a
                responsive site with smooth transitions. This site is hosted in
                a CI/CD pipeline in AWS, and the code repository can be found
                <span>
                  {" "}
                  <a
                    href={"https://github.com/ryanepshortt/personal-site"}
                    className="uk-link"
                  >
                    here
                  </a>
                </span>
                .
              </p>
            </div>
            <div className="footer-wrapper">
              <div className="uk-card-footer">
                <div className="icons icons3">
                  <p className="uk-text-center">
                    <img
                      className="tech-icon"
                      src={ReactIcon}
                      alt="react icon"
                      data-uk-tooltip="React"
                    />
                    <img
                      className="tech-icon"
                      src={npmIcon}
                      alt="npm icon"
                      data-uk-tooltip="NodeJS"
                    />
                    <img
                      className="tech-icon"
                      src={uiKitIcon}
                      alt="uikit icon"
                      data-uk-tooltip="UiKit"
                    />
                    <img
                      className="tech-icon"
                      src={awsIcon}
                      alt="aws icon"
                      data-uk-tooltip="Amazon Web Services"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
