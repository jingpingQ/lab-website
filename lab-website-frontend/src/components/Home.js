// Home.js
import React from 'react';
import './Home.css';
import Tool from './Tool';
import Research from './Research';
import Contact from './Contact';
import PasswordProtectedPage from './PasswordProtectedPage'; // 引入密码保护组件

function Home() {
    return (
        <PasswordProtectedPage>
            <div>
                <div className="hero-section" id="home">
                    <div className="content">
                        <h1>Welcome to Stein Lab</h1>
                        <p>Advancing research in genetics and cancer studies.</p>
                    </div>
                    <div className="scroll-down">
                        <span>↓ Scroll Down</span>
                    </div>
                </div>

                <div className="spacer"></div>
                <div id="about" className="section">
                    <h2>About</h2>
                    <p>
                        The Stein Lab is dedicated to advancing the understanding of genomics, bioinformatics, and computational biology. Our lab focuses on developing innovative computational tools and methods to analyze complex biological data, aiming to translate these insights into meaningful discoveries in human health and disease. With a collaborative and interdisciplinary approach, we work closely with researchers across various fields, combining expertise in computer science, biology, and data analysis to tackle challenges in genomics. Our mission is to empower the scientific community with cutting-edge resources and knowledge, fostering discoveries that drive progress in personalized medicine and genomics research.
                    </p>
                </div>

                <div className="spacer"></div>
                <div id="tool">
                    <Tool />
                </div>

                <div className="spacer"></div>
                <div id="research">
                    <Research />
                </div>

                <div className="spacer"></div>
                <div id="contact">
                    <Contact />
                </div>
            </div>
        </PasswordProtectedPage>
    );
}

export default Home;
