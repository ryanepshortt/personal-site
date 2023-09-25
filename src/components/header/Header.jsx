import React, { useState, useRef, useContext } from "react";
import ThemeContext from "../../themeContext/ThemeContext";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import AnimatedIcon from "../animatedIcon/AnimatedIcon";
import { PAGES } from "../../constants/AppConstants";
import "./Header.css";

function Header({ pageKey, setPageKey }) {
  const [drop, setDrop] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setDrop, drop);
  const { isDark } = useContext(ThemeContext);
  const onDropdownLinkClick = (option) => {
    setPageKey(option);
    setDrop(false);
  };
  return (
    <div
      className={`uk-width-1-1 uk-flex uk-flex-middle ${
        isDark ? "dark-header-wrapper" : "header-wrapper"
      }`}
    >
      <div className="uk-flex-none">
        <span className="uk-text-large uk-text-bold uk-padding">
          Ryan Shortt
        </span>
      </div>
      <div className="uk-flex-auto ">
        <div ref={wrapperRef}>
          <button
            type="button"
            id="hamburger"
            data-uk-icon="icon: table"
            className="table-icon uk-icon uk-button uk-text-bold uk-float-right uk-margin-right@s uk-hidden@s"
            onClick={() => setDrop(!drop)}
          />
          <div
            id="drop"
            className={`uk-hidden@s custom-dropdown ${!drop && "uk-hidden"}`}
          >
            <div className="uk-text-center uk-inline">
              <div
                className={`${
                  pageKey === PAGES.about ? "dd-option" : "dd-selected"
                }`}
                onClick={() => onDropdownLinkClick(PAGES.about)}
              >
                About Me
              </div>
              <div
                className={`${
                  pageKey === PAGES.projects ? "dd-option" : "dd-selected"
                } uk-padding uk-padding-remove-horizontal`}
                onClick={() => onDropdownLinkClick(PAGES.projects)}
              >
                Projects
              </div>
              <div
                className={`${
                  pageKey === PAGES.contact ? "dd-option" : "dd-selected"
                }`}
                onClick={() => onDropdownLinkClick(PAGES.contact)}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
        <AnimatedIcon />
        <span
          className={`${
            pageKey === PAGES.contact ? "selected" : "nav-link"
          } uk-button uk-text-bold uk-float-right uk-visible@s`}
          onClick={() => setPageKey(PAGES.contact)}
        >
          Contact
        </span>
        <span
          className={`${
            pageKey === PAGES.projects ? "selected" : "nav-link"
          } uk-button uk-text-bold uk-float-right uk-margin-remove-left uk-visible@s`}
          onClick={() => setPageKey(PAGES.projects)}
        >
          Projects
        </span>
        <span
          className={`${
            pageKey === PAGES.about ? "selected" : "nav-link"
          } uk-button uk-text-bold uk-float-right uk-visible@s`}
          onClick={() => setPageKey(PAGES.about)}
        >
          About Me
        </span>
      </div>
    </div>
  );
}

export default Header;
