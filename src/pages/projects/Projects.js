import React from "react";
import ThemeContext from "../../themeContext/ThemeContext";
import ProjectInfo from "../../constants/projectConstants/ProjectConstants";
import ProjectTile from "../../components/projectTile/ProjectTile";
import "./Projects.css";

const Projects = () => {
  const { theme, dark } = React.useContext(ThemeContext);
  return (
    <div className={"uk-animation-fade"}>
      <div
        className={` uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@l uk-grid-match`}
        data-uk-grid
        data-uk-height-match="target: > div > div > .footer-wrapper"
      >
        {ProjectInfo.map((projectInfo) => (
          <ProjectTile projectInfo={projectInfo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
