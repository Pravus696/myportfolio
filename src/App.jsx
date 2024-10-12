import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
    const [activeTab, setActiveTab] = useState('About');

    const renderContent = () => {
        switch (activeTab) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Projects':
                return <Projects />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            <h1>My Portfolio</h1>
            <nav>
                <button onClick={() => setActiveTab('About')}>About</button>
                <button onClick={() => setActiveTab('Contact')}>Contact</button>
                <button onClick={() => setActiveTab('Projects')}>Projects</button>
                <button onClick={() => setActiveTab('Resume')}>Resume</button>
            </nav>
            <div>
                {renderContent()}
            </div>
        </div>
    );
};

export default App;