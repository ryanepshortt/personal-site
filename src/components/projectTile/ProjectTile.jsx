import React from "react";
import ThemeContext from "../../contexts/ThemeContext";
import "../../pages/home/projects/Projects.css";

function ProjectTile({ projectInfo }) {
  const { theme, isDark } = React.useContext(ThemeContext);
  const { titleInfo, imageInfo, techList, body } = projectInfo;
  return (
    <div>
      <div
        className="uk-card uk-card-default project-tile-wrapper"
        style={{
          background: theme.cardBackground,
          color: theme.foreground,
          transition: theme.transition,
        }}
      >
        <div className="uk-card-media-top media-card project-tile-image-wrapper">
          <img
            className="uk-animation-fade project-tile-image"
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
                  src={isDark ? darkImg || img : img}
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
}

export default ProjectTile;
