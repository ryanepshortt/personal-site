import React, { useContext } from "react";
import ThemeContext from "../../themeContext/ThemeContext";

function BlockQuote() {
  const { theme } = useContext(ThemeContext);
  return (
    <blockquote
      className="uk-margin-large-top uk-padding-small"
      style={{
        borderLeft: `1px solid ${theme.foreground}`,
        color: theme.foreground,
      }}
    >
      As a Growth Product Manager, I've had the pleasure to work closely with
      Ryan, an exceptional Full Stack Developer. His work ethic is second to
      none - he consistently puts in the hours necessary to not only meet, but
      exceed our project goals. <br />
      <br />
      His meticulous attention to detail has saved us countless hours of
      troubleshooting and rework, ensuring our software runs smoothly and
      efficiently. This level of dedication and precision makes Ryan an
      indispensable asset to our team. His capacity to solve complex problems
      swiftly has considerably accelerated our product development cycle,
      directly impacting our growth metrics. <br /> <br />
      He is a wizard at identifying and rectifying edge cases, resulting in
      great products that run smoothly, improving user acquisition and overall
      satisfaction. <br /> <br />
      If you're seeking a developer who combines hard work, talent, and a deep
      understanding of full stack development, look no further than Ryan. I am
      confident that his skills and dedication will be a valuable addition to
      any team or project.
      <footer>
        <a
          href="https://www.linkedin.com/in/ryan-shortt/details/recommendations/"
          target="_blank"
        >
          Nicole White - Product Manager @ Wish
        </a>
        <br />
        <i
          style={{
            marginLeft: "10px",
            color: theme.foreground,
            fontSize: "10px",
          }}
        >
          (See recommendations section)
        </i>
      </footer>
    </blockquote>
  );
}

export default BlockQuote;
