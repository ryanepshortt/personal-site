import React from 'react';
import mcmaster from '../../assets/McMaster.jpg';
import ciena from '../../assets/Ciena.jpg';
function About() {
    return (
        <div>

            <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                <div>

                    <div className="uk-inline">
                        <img src={mcmaster} alt=""/>
                        <div className="uk-overlay uk-overlay-default uk-position-bottom">
                            <h4>McMaster University - Computer Engineering</h4>
                            <p>2016-2021</p>
                        </div>
                    </div>

                </div>
                <div>

                    <div className="uk-inline">
                        <img src={ciena} alt=""/>
                        <div className="uk-overlay uk-overlay-default uk-position-bottom">
                            <h4>Ciena - Automation Tools Developer (Co-Op)</h4>
                            <p>May 2019 - May 2020</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}


export default About;
