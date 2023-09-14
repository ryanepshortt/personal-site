import React, { useContext } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ThemeContext from "../../themeContext/ThemeContext";
import "./Contact.css";

function Contact() {
  const { height } = useWindowDimensions();
  const { theme } = useContext(ThemeContext);
  return (
    <div className="uk-animation-fade" style={{ height: height - 190 }}>
      <div className="uk-text-center">
        <h3 style={{ color: theme.cardTitle }}>
          I am currently interviewing for full stack positions in the Toronto
          area!
        </h3>
        <h3 style={{ color: theme.cardTitle }}>
          email:{" "}
          <span className="uk-text-bold uk-text-italic">
            r.shortt98@gmail.com
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Contact;
