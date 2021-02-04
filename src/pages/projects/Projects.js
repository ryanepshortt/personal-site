import React from 'react';
import logo from '../../../public/logo512.png';
function Projects() {
    return (
        <div>
            <div className="uk-child-width-1-2@m" data-uk-grid>
                <div>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Media Top</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Media Bottom</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                        </div>
                        <div className="uk-card-media-bottom">
                            <img src='../../../public/logo512.png' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Projects;
