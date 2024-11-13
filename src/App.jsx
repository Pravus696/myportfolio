import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import { useEffect } from 'react';

const App = () => {
    const [activeTab, setActiveTab] = useState('About');

    useEffect(() => {
        setActiveTab('Home');
    }, []);
    const renderContent = () => {
        switch (activeTab) {
            case 'Home':
            return (
                <section>
                    <h2>My name is Trevor Bell</h2>
                    <p>Welcome to my portfolio!</p>
                    <p>Feel free to click around and learn more about me.</p>
                </section>
            );
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Projects':
                return <Projects />;
            case 'Resume':
                return <Background />;
            default:
                return <About />;
        }
    };

    return (
        <section id="header">
            <h1>My Portfolio</h1>
            <nav>
                <button onClick={() => setActiveTab('About')}>About</button>
                <button onClick={() => setActiveTab('Contact')}>Contact</button>
                <button onClick={() => setActiveTab('Projects')}>Projects</button>
                <button onClick={() => setActiveTab('Resume')}>Background</button>
                
            </nav>
            <main>
                {renderContent()}
            </main>
        </section>
    );
};

export default App;