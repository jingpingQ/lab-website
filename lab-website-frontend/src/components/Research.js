// Research.js
import React from 'react';
import './Research.css';

function Research() {
    const researchItems = [
        {
            title: 'Gene Expression Analysis',
            description: 'We study the regulation of gene expression in various cellular contexts using advanced computational techniques.',
            icon: '🧬',
        },
        {
            title: 'Clinical Data Integration',
            description: 'Our research integrates clinical data with biological information to improve personalized medicine approaches.',
            icon: '📊',
        },
        {
            title: 'Cancer Mutation Profiling',
            description: 'We analyze genetic mutations in cancer cells to better understand their role in tumor progression.',
            icon: '🔬',
        },
        {
            title: 'Biomarker Discovery',
            description: 'Using large datasets, we identify potential biomarkers for early cancer detection and prognosis.',
            icon: '💉',
        },
    ];

    return (
        <div className="research-section">
            <h2>RESEARCH</h2>
            <div className="research-container">
                {researchItems.map((item, index) => (
                    <div key={index} className="research-item">
                        <div className="research-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Research;
