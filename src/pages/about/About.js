import React, {useEffect, useState} from 'react';
import {ThemeContext} from "../../themeContext/ThemeContext";
import {useWindowDimensions} from "../../scripts/pageSize";
import mcmaster from '../../assets/McMaster.jpg';
import mcmaster2 from '../../assets/McMaster-orig.jpg';
import ciena from '../../assets/ciena.jpg';
import solace from '../../assets/solace.png';
import IOF from '../../assets/IOF.png';
import piano from '../../assets/RyanPiano.jpg';
import ryanSwing from '../../assets/Ryan-Swing.png';
import './About.css';




function About() {
    const {width,height} = useWindowDimensions();
    const [displayImg, setDisplayImg] = useState(1);
    const [macLoaded, setMacLoaded]= useState(false);
    const [showOverlay, setShowOverlay]= useState(false);
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    img1.onload = () => {
        // when it finishes loading, update the component state
        setMacLoaded(true)
    }

    if (width > 960) {
        img1.src = mcmaster;
    } else {
        img1.src = mcmaster2;
    }
    // by setting an src, you trigger browser download
    img2.src = ciena;
    img3.src = solace;

    useEffect(() => {
        if(macLoaded === true) {
            setTimeout(() => {setShowOverlay(true)}, 100);
        }
    },[macLoaded])

    let Mac = mcmaster;
    if (width <= 960) {
        Mac = mcmaster2;
    }

    const {theme, dark} = React.useContext(ThemeContext);


    const mySources = [
        "https://www.youtube.com/embed/qPv-UO6XUpM?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com",
        "https://www.youtube.com/embed/qPv-UO6XUpM?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com",
        "https://www.youtube.com/embed/9xfU5fJEgtE?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com",
        "https://www.youtube.com/embed/QOUG0Esr3BY?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
    ];

    return (
        !showOverlay ? <div style={{height: (height - 190)}}/> :
        <div className={'uk-animation-fade'}>

            <h2 style={{color: theme.cardTitle}}> Education and Employment</h2>

            <div className='custom-margin' >
                <div className="uk-inline about-card"  style={{color: theme.overlayText}}>
                    <img src={Mac} alt="" />
                        <div className={`uk-animation-fade uk-overlay uk-position-bottom overlay-plate ${dark ? 'uk-overlay-primary' : 'uk-overlay-default'}`}>
                            <p className='uk-margin-remove-bottom'><span className='uk-text-bold'>McMaster University</span> - Computer Engineering <span className='uk-visible@s'>Co-Op (2016-2021)</span></p>
                            <p className='uk-margin-small-top'>Dean's List: 3A, 3B, 4A</p>
                        </div>
                </div>
            </div>

            <div className="uk-child-width-1-2@m uk-text-center uk-grid-match" data-uk-grid>

                <div>
                    <div className="uk-inline about-card" style={{color: theme.overlayText}}>
                        <img className='work-img' src={ciena} alt=""/>
                        <div className={`uk-overlay uk-position-bottom overlay-plate ${dark ? 'uk-overlay-primary' : 'uk-overlay-default'}`}>
                            <p className='uk-margin-remove-bottom'><span className='uk-text-bold'>Ciena</span> - Automation Tools Developer (Co-Op)</p>
                            <p className='uk-margin-small-top'>May 2019 - May 2020</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="uk-inline about-card uk-animation-fade" style={{color: theme.overlayText}}>
                        <img className='work-img' src={solace} alt=""/>
                        <div className={`uk-overlay  uk-position-bottom overlay-plate ${dark ? 'uk-overlay-primary' : 'uk-overlay-default'}`}>
                            <p className='uk-margin-remove-bottom'><span className='uk-text-bold'>Solace</span> - Technical Support Specialist (Co-Op)</p>
                            <p className='uk-margin-small-top'>April 2020 - August 2020</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='uk-margin-large-top' style={{color: theme.foreground}}>
                <h2 style={{color: theme.cardTitle}}>Personal Profile</h2>

                <p className="uk-article-meta" >Hometown: Whitby On</p>

                <p className="uk-text-lead" style={{color: theme.foreground}}>
                    I am a hard-working individual with a passion for coding, computers, and robotics.
                    I am an avid pianist, guitar player and singer, having been fortunate enough to play at various
                    events. Likewise, I have a passion for sports as I have played many years of competitive
                    hockey and golf.
                </p>
                <div className='uk-width-1-1 uk-flex uk-flex-center'>
                    <iframe
                        id='video-player'
                        src={mySources[0]}
                        width="1440" height="810" frameBorder="0" allowFullScreen data-uk-responsive
                        data-uk-video="automute: true"
                    />
                </div>


                <div className={'uk-width-1-1 uk-flex uk-flex-center'}>
                    <div className=" uk-width-2-3 uk-child-width-1-3@m uk-margin-large-top" data-uk-grid data-uk-lightbox="animation: slide">
                        <div onClick={() => {if (displayImg !== 1) { document.getElementById('video-player').src = mySources[1]; setDisplayImg(1)}}}>
                            <img className={`video-img ${displayImg === 1 ? 'video-selected' : ''}`} src={IOF} alt=""/>
                        </div>
                        <div onClick={() => {if (displayImg !== 2) { document.getElementById('video-player').src = mySources[2]; setDisplayImg(2)}}}>
                            <img className={`video-img ${displayImg === 2 ? 'video-selected' : ''}`} src={piano} alt=""/>
                        </div>
                        <div onClick={() => {if (displayImg !== 3) { document.getElementById('video-player').src = mySources[3]; setDisplayImg(3)}}}>
                            <img className={`video-img ${displayImg === 3 ? 'video-selected' : ''}`} src={ryanSwing} alt=""/>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
}


export default About;






