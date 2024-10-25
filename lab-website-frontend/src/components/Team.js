import React from 'react';
import './Team.css';

const Team = () => {
    // 模拟团队成员数据，包括Principal Investigator
    const principalInvestigator = {
        name: 'Lincoln Stein',
        role: 'Principal Investigator',
        bio: 'Dr. Lincoln Stein is a leading scientist in the field of bioinformatics and computational biology, heading the research efforts to advance data-driven discoveries.',
        linkedin: 'https://linkedin.com/in/lincolnstein',
        github: 'https://github.com/lincolnstein',
        email: 'lincolnstein@example.com'
    };

    const teamMembers = [
        // Researchers
        { name: 'Catherine Lee', role: 'Research Scientist', bio: 'Catherine leads the AI research team, working on innovative approaches to machine learning and data analysis.', linkedin: 'https://linkedin.com/in/catherinelee', github: 'https://github.com/catherinelee', email: 'catherine@example.com', group: 'research' },
        { name: 'David Zhang', role: 'Research Assistant', bio: 'David focuses on computational biology research, specializing in data-driven insights for drug discovery.', linkedin: 'https://linkedin.com/in/davidzhang', github: 'https://github.com/davidzhang', email: 'david@example.com', group: 'research' },
        { name: 'Ella Chen', role: 'Postdoctoral Fellow', bio: 'Ella\'s research focuses on cancer genomics and therapeutic resistance.', linkedin: 'https://linkedin.com/in/ellachen', github: 'https://github.com/ellachen', email: 'ella@example.com', group: 'research' },
        { name: 'Frank Li', role: 'Bioinformatics Analyst', bio: 'Frank applies computational techniques to solve biological questions.', linkedin: 'https://linkedin.com/in/frankli', github: 'https://github.com/frankli', email: 'frank@example.com', group: 'research' },
        { name: 'Grace Wu', role: 'Data Scientist', bio: 'Grace works on integrating big data for biological insights.', linkedin: 'https://linkedin.com/in/gracewu', github: 'https://github.com/gracewu', email: 'grace@example.com', group: 'research' },
        { name: 'Henry Zhao', role: 'Research Associate', bio: 'Henry assists in experimental design and data analysis.', linkedin: 'https://linkedin.com/in/henryzhao', github: 'https://github.com/henryzhao', email: 'henry@example.com', group: 'research' },
        { name: 'Isabella Wang', role: 'Computational Biologist', bio: 'Isabella focuses on integrating multi-omics data.', linkedin: 'https://linkedin.com/in/isabellawang', github: 'https://github.com/isabellawang', email: 'isabella@example.com', group: 'research' },
        { name: 'Jason Lu', role: 'Clinical Researcher', bio: 'Jason bridges clinical data with bioinformatics insights.', linkedin: 'https://linkedin.com/in/jasonlu', github: 'https://github.com/jasonlu', email: 'jason@example.com', group: 'research' },
        { name: 'Kelly Zhu', role: 'Molecular Biologist', bio: 'Kelly explores genetic variations and their impacts.', linkedin: 'https://linkedin.com/in/kellyzhu', github: 'https://github.com/kellyzhu', email: 'kelly@example.com', group: 'research' },
        { name: 'Leo Huang', role: 'PhD Candidate', bio: 'Leo is working on new computational methods for data analysis.', linkedin: 'https://linkedin.com/in/leohuang', github: 'https://github.com/leohuang', email: 'leo@example.com', group: 'research' },
    // Developers
        { name: 'Alice Wang', role: 'Senior Developer', bio: 'Alice has over 10 years of experience in full-stack development and specializes in building scalable web applications.', linkedin: 'https://linkedin.com/in/alicewang', github: 'https://github.com/alicewang', email: 'alice@example.com', group: 'developer' },
        { name: 'Bob Chen', role: 'Junior Developer', bio: 'Bob is a software engineer focused on frontend development, with a passion for creating interactive user interfaces.', linkedin: 'https://linkedin.com/in/bobchen', github: 'https://github.com/bobchen', email: 'bob@example.com', group: 'developer' },
        { name: 'Daisy Liu', role: 'Frontend Developer', bio: 'Daisy enjoys creating dynamic and user-friendly web applications.', linkedin: 'https://linkedin.com/in/daisyliu', github: 'https://github.com/daisyliu', email: 'daisy@example.com', group: 'developer' },
        { name: 'Edward Zhao', role: 'Backend Developer', bio: 'Edward is an expert in server-side development and database optimization.', linkedin: 'https://linkedin.com/in/edwardzhao', github: 'https://github.com/edwardzhao', email: 'edward@example.com', group: 'developer' },
        { name: 'Fiona Guo', role: 'Full-Stack Developer', bio: 'Fiona loves tackling complex problems with elegant code.', linkedin: 'https://linkedin.com/in/fionaguo', github: 'https://github.com/fionaguo', email: 'fiona@example.com', group: 'developer' },
        { name: 'George Lin', role: 'Mobile Developer', bio: 'George develops mobile apps for both Android and iOS.', linkedin: 'https://linkedin.com/in/georgelin', github: 'https://github.com/georgelin', email: 'george@example.com', group: 'developer' },
        { name: 'Hannah Yu', role: 'DevOps Engineer', bio: 'Hannah ensures smooth deployments and efficient CI/CD pipelines.', linkedin: 'https://linkedin.com/in/hannahyu', github: 'https://github.com/hannahyu', email: 'hannah@example.com', group: 'developer' },
        { name: 'Ian Chen', role: 'Software Engineer', bio: 'Ian works on improving the code quality and performance.', linkedin: 'https://linkedin.com/in/ianchen', github: 'https://github.com/ianchen', email: 'ian@example.com', group: 'developer' },
        { name: 'Jackie Sun', role: 'Cloud Engineer', bio: 'Jackie specializes in cloud infrastructure and AWS services.', linkedin: 'https://linkedin.com/in/jackiesun', github: 'https://github.com/jackiesun', email: 'jackie@example.com', group: 'developer' },
        { name: 'Karen Zhang', role: 'QA Engineer', bio: 'Karen is responsible for ensuring product quality and testing.', linkedin: 'https://linkedin.com/in/karenzhang', github: 'https://github.com/karenzhang', email: 'karen@example.com', group: 'developer' }
    ];

const alumni = [
    { name: 'Emily Zhang', formerRole: 'Research Assistant', currentPosition: 'Data Scientist at Google' },
    { name: 'John Doe', formerRole: 'Postdoctoral Fellow', currentPosition: 'Assistant Professor at MIT' },
    { name: 'Lisa Wong', formerRole: 'Junior Developer', currentPosition: 'Software Engineer at Facebook' },
    { name: 'Michael Brown', formerRole: 'Research Scientist', currentPosition: 'Senior Bioinformatics Analyst at Genentech' },
    { name: 'Sarah Green', formerRole: 'Graduate Student', currentPosition: 'PhD Candidate at Stanford University' }
];

    return (
        <div className="team-container">
            <div className="principal-investigator">
                <div className="pi-photo"></div>
                <h2>{principalInvestigator.name}</h2>
                <p className="role">{principalInvestigator.role}</p>
                <p className="bio">{principalInvestigator.bio}</p>
                <div className="social-links">
                    <a href={principalInvestigator.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={principalInvestigator.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={`mailto:${principalInvestigator.email}`}>Email</a>
                </div>
            </div>
            <div className="team-group">
                <h3>Researchers</h3>
                <div className="team-members">
                    {teamMembers.filter(member => member.group === 'research').map((member, index) => (
                        <div className="team-member" key={index}>
                            <div className="member-photo"></div>
                            <h4>{member.name}</h4>
                            <p className="role">{member.role}</p>
                            <p className="bio">{member.bio}</p>
                            <div className="social-links">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={`mailto:${member.email}`}>Email</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="team-group">
                <h3>Developers</h3>
                <div className="team-members">
                    {teamMembers.filter(member => member.group === 'developer').map((member, index) => (
                        <div className="team-member" key={index}>
                            <div className="member-photo"></div>
                            <h4>{member.name}</h4>
                            <p className="role">{member.role}</p>
                            <p className="bio">{member.bio}</p>
                            <div className="social-links">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={`mailto:${member.email}`}>Email</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Alumni section */}
            <div className="alumni-section">
                <h3>Alumni</h3>
                <ul className="alumni-list">
                    {alumni.map((person, index) => (
                        <li key={index} className="alumni-item">
                            <p className="alumni-name">{person.name}</p>
                            <p className="alumni-former-role">{person.formerRole}</p>
                            <p className="alumni-current-position">Currently: {person.currentPosition}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Team;
