import React,{useState, useContext} from 'react';
import {ThemeContext} from './themeContext/ThemeContext';

import Header from './components/header/Header';
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import './App.css';



function App() {
    let [showData, setShowData] = useState('Projects');
    const {theme} = useContext(ThemeContext);
    return (
        <div className="App" style={{ background: theme.background, color: theme.foreground, transition: theme.transition }}>
            <Header showData={showData} setShowData={setShowData}/>
            <div className='content-container' >
                {contentSwitcher(showData)}
            </div>
        </div>
    );
}

function contentSwitcher(showData) {
    switch (showData) {
        case "Contact":
            return (<Contact/>);
        case "About Me":
            return (<About/>);
        case "Projects":
            return (<Projects/>);
    }
}




export default App;
