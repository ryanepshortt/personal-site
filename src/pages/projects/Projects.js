import React from 'react';
import smartHome from '../../assets/smart-home.jpeg';
import boogie from '../../assets/Boogie.png';
import hve from '../../assets/HomeValue.jpeg';
import neuralNet from '../../assets/neuralnetwork.jpg';
import serverRoom from '../../assets/server-room.jpg';


import ReactIcon from '../../assets/logo512.png';
import pythonIcon from '../../assets/python-icon.png';
import formikIcon from '../../assets/formik.png';
import postgresIcon from '../../assets/postgres-icon.png';
import reduxIcon from '../../assets/redux-icon.png';
import awsIcon from '../../assets/aws-icon.png';
import npmIcon from '../../assets/npm-icon.png';
import mapsIcon from '../../assets/google-maps-icon.png';
import htmlIcon from '../../assets/html-icon.png';
import cssIcon from '../../assets/css-icon.png';
import jsIcon from '../../assets/javascript-icon.png';
import jqIcon from '../../assets/jquery-icon.png';
import numpyIcon from '../../assets/numpy.png';
import uiKitIcon from '../../assets/uikit-icon.png';
import d3Icon from '../../assets/d3-icon.png';
import tclIcon from '../../assets/tcl-icon.png';
import jenkinsIcon from '../../assets/jenkins-icon.png';
import bashIcon from '../../assets/bash-icon.png';



import './Projects.css'

function Projects() {
    return (
        <div>
            <div className="uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@xl uk-grid-match" data-uk-grid data-uk-height-match="target: > div > div > .footer-wrapper">
                <div>
                    <div className="uk-card uk-card-default custom-card">
                        <div className="uk-card-media-top media-card">
                            <img src={smartHome} alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Smart Home Microsite</h3>
                            <p>
                                Designed and implemented a smart home microsite for a
                                <span className='uk-text-bold'> McMaster-partnered company</span>. This was my 4th year
                                capstone project where my team members and I had to interview for the opportunity
                                to work with this company.
                            </p>
                            <p>
                                The application allowed users to create their own accounts as well as add and control
                                paired hardware nodes. I was responsible for the development of the UI, as well as
                                helping to design the REST API layer using Express and Postgres. Once development is
                                finished, the app will be deployed in AWS
                            </p>
                        </div>
                        <div className='footer-wrapper'>
                            <div className='uk-card-footer'>
                                <div className='icons'>
                                    <p className='uk-text-center'>
                                        <img className='tech-icon' src={ReactIcon} alt={'react icon'} data-uk-tooltip='React'/>
                                        <img className='tech-icon' src={reduxIcon} alt={'redux icon'} data-uk-tooltip='Redux'/>
                                        <img className='tech-icon' src={postgresIcon} alt={'postgres icon'} data-uk-tooltip='Postgres'/>
                                        <img className='tech-icon' src={awsIcon} alt={'aws icon'} data-uk-tooltip='Amazon Web Services'/>
                                    </p>
                                    <p className='uk-text-center'>
                                        <img className='tech-icon' src={npmIcon} alt={'npm icon'} data-uk-tooltip='NodeJS'/>
                                        <img className='tech-icon' src={formikIcon} alt={'formik icon'} data-uk-tooltip='Formik'/>
                                        <img className='tech-icon' src={uiKitIcon} alt={'uikit icon'} data-uk-tooltip='UiKit'/>
                                        <img className='tech-icon' src={d3Icon} alt={'d3 icon'} data-uk-tooltip='D3.JS'/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default custom-card">
                        <div className="uk-card-media-top media-card">
                            <img src={serverRoom} alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">System Sanity Tool (Ciena)</h3>
                            <p>
                                Developed a system sanity tool to help with hardware debugging for automation
                                testing teams at Ciena. The tool allowed users to target specific hardware
                                configurations in the lab then gather and email out in depth diagnostics on them, such
                                as the amount of packets lost, CRC errors or unconfigurable hardware nodes.
                            </p>
                            <p>
                                I also integrated the tool into our Jenkins Pipeline, where the tool would automati-cally
                                detect the hardware configuration that was under test, run diagnostics checks on it
                                and display the in Jenkins.
                            </p>
                        </div>
                        <div className='footer-wrapper'>
                            <div className='uk-card-footer'>
                                <div className='icons ciena-icons'>
                                    <p className='uk-text-center'>
                                        <img className='tech-icon' src={tclIcon} alt={'TCL icon'} data-uk-tooltip='TCL'/>
                                        <img className='tech-icon' src={jenkinsIcon} alt={'Jenkins icon'} data-uk-tooltip='Jenkins'/>
                                        <img className='tech-icon' src={bashIcon} alt={'Bash icon'} data-uk-tooltip='Bash'/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="uk-card uk-card-default custom-card">
                        <div className="uk-card-media-top media-card">
                            <img src={boogie} alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Musician Social Media Site</h3>
                            <p>
                                I Developed a personal music-themed website where users could advertise their own skills,
                                upcoming events, or shows. This was the first site that I had ever made and was my
                                first time using basic web development tools such as Javascript and JQuery. The site also
                                used an embedded <span className='uk-text-bold'> Google Maps API </span> which showed
                                the location of a clicked on event.
                            </p>
                            <p>
                                Since it was my first web development project I wanted to do all the styling and
                                javascript development myself without the use of any frameworks or UI kits so that I could
                                develop a strong fundamental understanding of these technologies.
                            </p>
                        </div>
                        <div className='footer-wrapper'>
                            <div className='uk-card-footer'>
                                <div className='icons boogie-icons'>
                                    <p className='uk-text-center'>
                                        <img className='tech-icon' src={mapsIcon} alt={'google maps icon'} data-uk-tooltip='Google Maps'/>
                                        <img className='tech-icon' src={htmlIcon} alt={'html icon'} data-uk-tooltip='HTML 5'/>
                                        <img className='tech-icon' src={cssIcon} alt={'css icon'} data-uk-tooltip='CSS'/>
                                        <img className='tech-icon' src={jsIcon} alt={'javascript icon'} data-uk-tooltip='JavaScript'/>
                                        <img className='tech-icon' src={jqIcon} alt={'JQuery icon'} data-uk-tooltip='JQuery'/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default custom-card">
                        <div className="uk-card-media-top media-card">
                            <img src={hve} alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Home Value Estimator</h3>
                            <p>
                                Used various Python libraries to develop a home value estimator. The estimator was
                                trained on the Boston housing dataset that can be found online. The dataset includes 506
                                examples which had 13 features, such as the crime rate per capita, and the average number
                                of rooms per dwelling. To select the best features I used basis expansion and K-Fold
                                cross validation to gauge which features were most closely correlated to the associated
                                target values.
                            </p>

                        </div>
                        <div className='footer-wrapper'>
                            <div className='uk-card-footer'>
                                <p className='uk-text-center'>
                                    <img className='tech-icon' src={pythonIcon} alt={'Python icon'} data-uk-tooltip='Python'/>
                                    <img className='tech-icon' src={numpyIcon} alt={'Numpy icon'} data-uk-tooltip='NumPy'/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default custom-card">
                        <div className="uk-card-media-top media-card">
                            <img src={neuralNet} alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Early Cancer Detector</h3>
                            <p>
                                Using Python, SciKit Learn, and the Wisconsin Breast Cancer dataset, I developed a
                                neural network to classify breast tumors as either malignant or benign. The dataset
                                consisted of over 500 examples, each with 10 attributes such as radius, perimeter and area.
                                My model was trained using stochastic gradient descent and a cross-entropy loss function.
                            </p>
                        </div>
                        <div className='footer-wrapper'>
                            <div className='uk-card-footer'>
                                <p className='uk-text-center'>
                                    <img className='tech-icon' src={pythonIcon} alt={'Python icon'} data-uk-tooltip='Python'/>
                                    <img className='tech-icon' src={numpyIcon} alt={'Numpy icon'} data-uk-tooltip='NumPy'/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default custom-card">
                        <div className="uk-card-media-top media-card">
                            <img src={hve} alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Home Value Estimator</h3>
                            <p>
                                Used various Python libraries to develop a home value estimator. The estimator was
                                trained on the Boston housing dataset that can be found online. The dataset includes 506
                                examples which had 13 features, such as the crime rate per capita, and the average number
                                of rooms per dwelling. To select the best features I used basis expansion and K-Fold
                                cross validation to gauge which features were most closely correlated to the associated
                                target values.
                            </p>
                        </div>
                        <div className='footer-wrapper'>
                            <div className='uk-card-footer'>
                                <p className='uk-text-center'>
                                    <img className='tech-icon' src={pythonIcon} alt={'Python icon'} data-uk-tooltip='Python'/>
                                    <img className='tech-icon' src={numpyIcon} alt={'Numpy icon'} data-uk-tooltip='NumPy'/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Projects;
