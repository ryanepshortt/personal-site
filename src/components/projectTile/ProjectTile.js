import React from "react";
import ThemeContext from "../../themeContext/ThemeContext";
import "../../pages/projects/Projects.css";

const ProjectTile = ({ projectInfo }) => {
  const { theme, dark } = React.useContext(ThemeContext);
  const { titleInfo, imageInfo, techList, body } = projectInfo;
  return (
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
            src={imageInfo.img}
            alt={imageInfo.alt}
          />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title" style={{ color: theme.cardTitle }}>
            {titleInfo?.href ? (
              <a href={titleInfo.href}>{titleInfo.title}</a>
            ) : (
              titleInfo.title
            )}
          </h3>
          {body()}
        </div>
        <div className="footer-wrapper">
          <div className="uk-card-footer">
            <div className="icons-wrapper">
              {techList.map(({ img, darkImg, tooltip }) => (
                <img
                  className="tech-icon"
                  src={dark ? darkImg || img : img}
                  alt={tooltip}
                  data-uk-tooltip={tooltip}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
