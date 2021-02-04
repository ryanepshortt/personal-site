import React from 'react';
import './Header.css';
function Header({showData, setShowData}) {


    return (
        <div className='uk-width-1-1 uk-flex uk-flex-middle header-wrapper'>
            <div className='uk-flex-none'>
                <span className='uk-text-large uk-text-bold uk-padding'>Ryan Shortt</span>
            </div>
            <div className='uk-flex-auto'>
                <span className={`${showData === 'Contact' ? 'selected' : 'nav-link'} uk-button uk-text-bold uk-float-right uk-margin-medium-right`} onClick={() => setShowData('Contact')}>Contact</span>
                <span className={`${showData === 'About Me' ? 'selected' : 'nav-link'} uk-button uk-text-bold uk-float-right uk-margin-medium-right`} onClick={() => setShowData('About Me')}>About Me</span>
                <span className={`${showData === 'Projects' ? 'selected' : 'nav-link'} uk-button uk-text-bold uk-float-right uk-margin-medium-right`} onClick={() => setShowData('Projects')}>Projects</span>
            </div>
        </div>
    );
}



export default Header;
