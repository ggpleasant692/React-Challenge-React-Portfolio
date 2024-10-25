import React from 'react';

const Resume = () => {
    return (
        <section>
            <h2>Resume</h2>
            <a href="link-to-your-resume.pdf" download>Download Resume</a>
            <ul>
                <li>Proficiency 1</li>
                <li>Proficiency 2</li>
                {/* Add more proficiencies later */}
            </ul>
        </section>
    );
};

export default Resume;