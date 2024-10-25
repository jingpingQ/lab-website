import React from 'react';
import './Tool.css';

const Tool = () => {
    return (
        <section className="tool-section">
            <h2>TOOLS</h2>
            <div className="tool-container">
                <div className="tool-item reactome-bg">
                    <h3>Reactome</h3>
                    <p>Open-source, curated and peer-reviewed pathway database</p>
                    <a href="https://reactome.org/" target="_blank" rel="noopener noreferrer">Explore Reactome</a>
                </div>
                <div className="tool-item jbrowse-bg">
                    <h3>JBrowse</h3>
                    <p>Next-generation genome browser for speed and extensibility</p>
                    <a href="https://jbrowse.org/jb2/" target="_blank" rel="noopener noreferrer">Try JBrowse</a>
                </div>
                <div className="tool-item wormbase-bg">
                    <h3>WormBase</h3>
                    <p>Online resource for nematode biology and genomics</p>
                    <a href="https://wormbase.org//#012-34-5" target="_blank" rel="noopener noreferrer">Access WormBase</a>
                </div>
                <div className="tool-item dockstore-bg">
                    <h3>Dockstore</h3>
                    <p>Platform for sharing Docker-based bioinformatics tools</p>
                    <a href="https://dockstore.org/" target="_blank" rel="noopener noreferrer">Visit Dockstore</a>
                </div>
            </div>
        </section>
    );
};

export default Tool;