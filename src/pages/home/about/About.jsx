import React, { useEffect, useState, useContext, useRef } from "react";
import ThemeContext from "../../../contexts/ThemeContext";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BlockQuote from "../../../components/blockQuote/BlockQuote";
import ExperienceTile from "../../../components/experienceTile/ExperienceTile";
import { QUOTE_STRINGS, YOUTUBE_LINKS } from "../../../constants/AppConstants";
import mcmasterImgWide from "../../../assets/avifs/mcmaster.avif";
import mcmasterImgSmall from "../../../assets/avifs/mcMasterOrig.avif";
import orium from "../../../assets/avifs/orium.avif";
import wish from "../../../assets/avifs/wish.avif";
import awn from "../../../assets/avifs/arcticwolf.avif";
import ciena from "../../../assets/avifs/ciena.avif";
import songImg from "../../../assets/avifs/ryanSong.avif";
import pianoImg from "../../../assets/avifs/ryanPiano.avif";
import golfImg from "../../../assets/avifs/ryanSwing.avif";
import "./About.css";

function About() {
  const { width, height } = useWindowDimensions();
  const [displayImg, setDisplayImg] = useState(1);
  const [macLoaded, setMacLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const { theme } = useContext(ThemeContext);
  const playerRef = useRef(null);
  const img1 = new Image();
  img1.onload = () => {
    setMacLoaded(true);
  };
  if (width > 960) {
    img1.src = mcmasterImgWide;
  } else {
    img1.src = mcmasterImgSmall;
  }

  useEffect(() => {
    if (macLoaded === true) {
      setTimeout(() => {
        setShowOverlay(true);
      }, 100);
    }
  }, [macLoaded]);

  const onSetDisplayImage = (imageIndex) => {
    if (playerRef?.current && displayImg !== imageIndex) {
      playerRef.current.src = YOUTUBE_LINKS[imageIndex];
      setDisplayImg(imageIndex);
    }
  };
  return !showOverlay ? (
    <div style={{ height: height - 190 }} />
  ) : (
    <div className="uk-animation-fade">
      <h2 style={{ color: theme.cardTitle }}>Education and Employment</h2>
      <div className="custom-margin">
        <ExperienceTile
          imageSource={width <= 960 ? mcmasterImgSmall : mcmasterImgWide}
          company="McMaster University"
          title="Computer Engineering Co-Op (2016-2021)"
          dates="Dean's List Semesters: 3A, 3B, 4A, 4B"
        />
      </div>
      <div
        className="uk-child-width-1-4@m uk-text-center uk-grid-match"
        data-uk-grid
      >
        <ExperienceTile
          imageSource={awn}
          company="Arctic Wolf"
          title="Senior Software Developer"
          dates="Dec 2023 - Present"
          size="small"
          hasPadding
        />
        <ExperienceTile
          imageSource={wish}
          company="Wish"
          title="Fullstack Software Engineer"
          dates="July 2022 - August 2023"
          size="small"
          hasPadding
        />
        <ExperienceTile
          imageSource={orium}
          company="Orium"
          title="Software Engineer"
          dates="May 2021 - July 2022"
          size="small"
          hasPadding
        />
        <ExperienceTile
          imageSource={ciena}
          company="Ciena"
          title="Automation Tools Developer (Co-Op)"
          dates="May 2019 - May 2020"
          size="small"
          hasPadding
        />
      </div>
      <BlockQuote
        bodyStrings={QUOTE_STRINGS}
        footerHref="https://www.linkedin.com/in/ryan-shortt"
        footerText="Nicole White - Product Manager @ Wish"
        footerDecorationText="See recommendations section"
      />
      <div className="uk-margin-large-top">
        <h2 style={{ color: theme.cardTitle }}>Profile</h2>
        <p
          className="uk-text-lead uk-text-medium"
          style={{ color: theme.cardTitle }}
        >
          I am a full stack software engineer with a passion for building high
          quality products. I am also an avid pianist, guitar player and singer,
          having been fortunate enough to play at various events. Likewise, I
          love sports, having grown up playing competitive hockey and golf, and
          am now the biggest Chelsea FC fan in North America!
        </p>
        <div className="uk-width-1-1 uk-flex uk-flex-center">
          <iframe
            ref={playerRef}
            src={YOUTUBE_LINKS[0]}
            title="Video player"
            width="1440"
            height="810"
            frameBorder="0"
            data-uk-video="automute: true"
            allowFullScreen
            data-uk-responsive
          />
        </div>
        <div className="uk-width-1-1 uk-flex uk-flex-center">
          <div
            className="uk-width-2-3 uk-child-width-1-3@m uk-margin-large-top"
            data-uk-lightbox="animation: slide"
            data-uk-grid
          >
            <div onClick={() => onSetDisplayImage(1)}>
              <img
                className={`video-img ${displayImg === 1 && "video-selected"}`}
                src={songImg}
                alt="singing video thumbnail"
              />
            </div>
            <div onClick={() => onSetDisplayImage(2)}>
              <img
                className={`video-img ${displayImg === 2 && "video-selected"}`}
                src={pianoImg}
                alt="piano video thumbnail"
              />
            </div>
            <div onClick={() => onSetDisplayImage(3)}>
              <img
                className={`video-img ${displayImg === 3 && "video-selected"}`}
                src={golfImg}
                alt="golf video thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
