import React,{useState, useEffect, useRef} from 'react';
import './Header.css';

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

    return (
        <div className='uk-width-1-1 uk-flex uk-flex-middle header-wrapper'>
            <div className='uk-flex-none'>
                <span className='uk-text-large uk-text-bold uk-padding'>Ryan Shortt</span>
            </div>
            <div className='uk-flex-auto '>


                <span className={`${showData === 'Contact' ? 'selected' : 'nav-link'} uk-button uk-text-bold uk-float-right uk-margin-right uk-visible@s`}
                      onClick={() => setShowData('Contact')}>Contact</span>
                <span className={`${showData === 'About Me' ? 'selected' : 'nav-link'} uk-button uk-text-bold uk-float-right uk-visible@s`}
                      onClick={() => setShowData('About Me')}>About Me</span>
                <span className={`${showData === 'Projects' ? 'selected' : 'nav-link'} uk-button uk-text-bold uk-float-right uk-margin-remove-left uk-visible@s`}
                      onClick={() => setShowData('Projects')}>Projects</span>


                <div ref={wrapperRef}>
                    <button type='button' id='hamburger' data-uk-icon='icon: table' className='table-icon uk-icon uk-button uk-text-bold uk-float-right uk-margin-right uk-hidden@s'
                            onClick={() => {setDrop(!drop)}}/>

                    <div id='drop' className={`uk-hidden@s custom-dropdown ${drop ? '' : 'uk-hidden'}`}>
                        <div className="uk-text-center uk-inline">
                            <div className={`${showData === 'Projects' ? 'dd-selected' : 'dd-option'}`} onClick={() => {setShowData('Projects'); setDrop(false)}}>Projects</div>
                            <div className={`${showData === 'About Me' ? 'dd-selected' : 'dd-option'} uk-padding uk-padding-remove-horizontal`} onClick={() => {setShowData('About Me'); setDrop(false)}}>About Me</div>
                            <div className={`${showData === 'Contact' ? 'dd-selected' : 'dd-option'}`}  onClick={() => {setShowData('Contact'); setDrop(false)}}>Contact</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}



export default Header;
