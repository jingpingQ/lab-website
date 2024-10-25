// Footer.js

import React from 'react';
import './Footer.css';
import oicrLogo from './images/oicr.svg';
import mogenLogo from './images/mogen.png';

function Footer() {
    return (
        <div className="footer">
            <div className="partners-section">
                <div className="partner-item">
                    <img
                        src={oicrLogo}
                        alt="Ontario Institute for Cancer Research"
                        className="partner-logo"
                    />
                    <p>Ontario Institute for Cancer Research</p>
                </div>
                <div className="partner-item">
                    <img
                        src={mogenLogo}
                        alt="University of Toronto Molecular Genetics"
                        className="partner-logo"
                    />
                    <p>University of Toronto Molecular Genetics</p>
                </div>
            </div>
            <div className="footer-links">
                <a href="https://oicr.on.ca/terms-and-conditions/" target="_blank" rel="noopener noreferrer">
                    Terms and Conditions
                </a>
            </div>
        </div>
    );
}

export default Footer;