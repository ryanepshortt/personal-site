import React, {useState, useEffect, useRef, useContext} from 'react';
import './Header.css';
import {ThemeContext} from "../../themeContext/ThemeContext";
import {useSpring, animated} from "react-spring";
import {useWindowDimensions} from "../../scripts/pageSize";

function useOutsideAlerter(ref, setDrop, drop) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (event.target.id === 'hamburger') {
                setDrop(!drop);
            } else {
                if (ref.current && !ref.current.contains(event.target)) {
                    setDrop(false);
                }
            }
        }

        // Bind the event listener
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);
}


function Header({showData, setShowData}) {


    let [drop,setDrop] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setDrop, drop);
    const {toggle, dark} = useContext(ThemeContext);
    const {width} = useWindowDimensions();
    const properties = {
        dark: {
            r: 9,
            transform: "rotate(40deg)",
            cx: 12,
            cy: 4,
            opacity: 0
        },
        light: {
            r: 5,
            transform: "rotate(90deg)",
            cx: 30,
            cy: 0,
            opacity: 1
        },
        springConfig: { mass: 4, tension: 250, friction: 35 }
    };


    const {r, transform, cx, cy, opacity} = properties[dark ? "dark" : "light"];
    const svgContainerProps = useSpring({transform, config: properties.springConfig});
    const centerCircleProps = useSpring({r, config: properties.springConfig});
    const maskedCircleProps = useSpring({cx, cy, config: properties.springConfig});
    const linesProps = useSpring({opacity, config: properties.springConfig});
    const AnimatedIcon = () => {
        return (
            <animated.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
                onClick={toggle}
                style={{
                    cursor: "pointer",
                    ...svgContainerProps
                }}
            >
                <mask id="myMask2">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <animated.circle style={maskedCircleProps} r="9" fill="black" />
                </mask>

                <animated.circle
                    cx="12"
                    cy="12"
                    style={centerCircleProps}
                    fill="white"
                    mask="url(#myMask2)"
                />
                <animated.g stroke="currentColor" style={linesProps}>
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </animated.g>
            </animated.svg>
        );
    };






    return (
        <div className={`uk-width-1-1 uk-flex uk-flex-middle ${ width > 475 ? dark ? 'dark-header-wrapper' : 'header-wrapper' : dark ? 'small-dark' : 'small-light'}`}>
            <div className='uk-flex-none'>
                <span className='uk-text-large uk-text-bold uk-padding'>Ryan Shortt</span>
            </div>
            <div className='uk-flex-auto '>

                <div ref={wrapperRef}>
                    <button type='button' id='hamburger' data-uk-icon='icon: table' className='table-icon uk-icon uk-button uk-text-bold uk-float-right uk-margin-right@s uk-hidden@s'
                            onClick={() => {setDrop(!drop)}}/>

                    <div id='drop' className={`uk-hidden@s custom-dropdown ${drop ? '' : 'uk-hidden'}`}>
                        <div className="uk-text-center uk-inline">
                            <div className={`${showData === 'Projects' ? 'dd-option' : 'dd-selected'}`} onClick={() => {setShowData('Projects'); setDrop(false)}}>Projects</div>
                            <div className={`${showData === 'About Me' ? 'dd-option' : 'dd-selected'} uk-padding uk-padding-remove-horizontal`} onClick={() => {setShowData('About Me'); setDrop(false)}}>About Me</div>
                            <div className={`${showData === 'Contact' ? 'dd-option' : 'dd-selected'}`}  onClick={() => {setShowData('Contact'); setDrop(false)}}>Contact</div>
                        </div>
                    </div>
                </div>

                <span className='uk-button uk-text-bold uk-float-right uk-padding uk-padding-remove-vertical uk-margin-large-right@s animated-icon-container'>
                    <AnimatedIcon/>
                </span>


                <span className={`${showData === 'Contact' ? 'selected' : 'nav-link'} uk-button uk-text-bold uk-float-right uk-visible@s`}
                      onClick={() => setShowData('Contact')}>Contact</span>
                <span className={`${showData === 'About Me' ? 'selected' : 'nav-link'} uk-button uk-text-bold uk-float-right uk-visible@s`}
                      onClick={() => setShowData('About Me')}>About Me</span>
                <span className={`${showData === 'Projects' ? 'selected' : 'nav-link'} uk-button uk-text-bold uk-float-right uk-margin-remove-left uk-visible@s`}
                      onClick={() => setShowData('Projects')}>Projects</span>
            </div>
        </div>
    );
}



export default Header;
