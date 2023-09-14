import React, { useContext } from "react";
import ThemeContext from "../../themeContext/ThemeContext";
import "./ExperienceTile.css";

function ExperienceTile({ imageSource, company, title, dates }) {
  const { theme, isDark } = useContext(ThemeContext);
  return (
    <div>
      <div
        className="uk-inline about-card uk-animation-fade"
        style={{ color: theme.overlayText }}
      >
        <div className="img-wrapper">
          <img className="work-img" src={imageSource} alt="Company Logo" />
        </div>
        <div
          className={`uk-overlay  uk-position-bottom overlay-plate ${
            isDark ? "uk-overlay-primary" : "uk-overlay-default"
          }`}
        >
          <p className="uk-margin-remove-bottom">
            <span className="uk-text-bold">{company}</span> - {title}
          </p>
          <p className="uk-margin-small-top">{dates}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTile;
