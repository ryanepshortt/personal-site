import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import "./ExperienceTile.css";

function ExperienceTile({
  imageSource,
  company,
  title,
  dates,
  size,
  hasPadding,
}) {
  const { theme, isDark } = useContext(ThemeContext);
  return (
    <div className="about-card-wrapper">
      <div
        className="uk-inline about-card uk-animation-fade"
        style={{ color: theme.overlayText }}
      >
        <div className={`img-wrapper ${hasPadding && "small-padding"}`}>
          <img
            className={`work-img ${size === "small" && "small-img"}`}
            src={imageSource}
            alt="Company Logo"
          />
        </div>
        <div
          className={`uk-overlay uk-position-bottom overlay-plate ${
            isDark ? "uk-overlay-primary" : "uk-overlay-default"
          } ${size === "small" && "small-text"}`}
        >
          <p className="uk-margin-remove-bottom">
            <span className="uk-text-bold">{company}</span> - {title}
          </p>
          <p className="subtitle">{dates}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTile;
