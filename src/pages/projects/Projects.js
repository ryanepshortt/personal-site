import React from 'react';
import smartHome from '../../assets/smart-home.jpeg';
import boogie from '../../assets/Boogie.png';

import './Projects.css'
function Projects() {
    return (
        <div >
            <div className="uk-child-width-1-2@m" data-uk-grid>
                <div>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top media-card">
                            <img src={smartHome}  alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Smart Home Microsite</h3>
                            <p>Designed and implemented a smart home microsite for a McMaster-sponsored company.
                                The application administers distributed control over hardware nodes using
                                NodeJs, React, Redux, and Formik. In addition to creating the UI,
                                I was involved in developing the REST API layer using Express and Postgres.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top media-card">
                            <img src={boogie}  alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Music-Themed Social Media Site</h3>
                            <p>Developed a personal music-themed website where users could advertise their own skills,
                                or any upcoming events or shows. The website was designed for mobile as well as desktop,
                                and was built using HTML, CSS, JavaScript, JQuery and the Google Maps API.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Projects;
