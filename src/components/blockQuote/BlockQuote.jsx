import React, { useContext } from "react";
import ThemeContext from "../../themeContext/ThemeContext";

function BlockQuote({
  bodyStrings,
  footerText,
  footerHref,
  footerDecorationText,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <blockquote
      className="uk-margin-large-top uk-padding-small"
      style={{
        borderLeft: `1px solid ${theme.foreground}`,
        color: theme.foreground,
      }}
    >
      {bodyStrings.map((str, index) => (
        <p className={`${index > 0 && "uk-margin-small-top"}`}>{str}</p>
      ))}
      <footer>
        <a href={footerHref} target="_blank">
          {footerText}
        </a>
        <br />
        <i
          style={{
            marginLeft: "10px",
            color: theme.foreground,
            fontSize: "10px",
          }}
        >
          {footerDecorationText}
        </i>
      </footer>
    </blockquote>
  );
}

export default BlockQuote;
