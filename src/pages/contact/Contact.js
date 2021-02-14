import React, {useContext} from 'react';
import './Contact.css';
import {useWindowDimensions} from "../../scripts/pageSize";
import {ThemeContext} from '../../themeContext/ThemeContext';

function Contact() {
    const {height} = useWindowDimensions();
    const {theme} = useContext(ThemeContext);
    return (
        <div style={{height: (height - 190)}}>
            <div className='uk-text-center'>

                <h3 style={{color: theme.cardTitle}}>I am currently interviewing for full-stack software development positions in the Toronto area!</h3>
                <p>
                    If you are interested in hiring a developer who specializes in React, Javascript, or Python,
                    feel free to contact me at: <span className='uk-text-bold uk-text-italic'>r.shortt98@gmail.com</span>
                </p>



            </div>


        </div>
    );
}


export default Contact;
