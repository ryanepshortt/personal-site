import React,{useState} from 'react';
import Header from './components/header/Header';
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

function App() {
    let [showData, setShowData] = useState('Projects');
    return (
        <div className="App">
            <Header showData={showData} setShowData={setShowData}/>
            {contentSwitcher(showData)}
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
