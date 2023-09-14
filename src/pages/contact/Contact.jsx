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
        <h4 style={{ color: theme.cardTitle }}>
          email:{" "}
          <span className="uk-text-bold uk-text-italic">
            r.shortt98@gmail.com
          </span>
        </h4>
        <h4 style={{ color: theme.cardTitle }}>
          phone:{" "}
          <span className="uk-text-bold uk-text-italic">+1 (289) 600 3833</span>
        </h4>
      </div>
    </div>
  );
}

export default Contact;
