import React from 'react';
import avatar from '../src/assets/avatar.jpg';

const AboutMe = () => {
    return (
        <section>
            <h2>About Me</h2>
            <img src={avatar} alt="My Avatar" className="avatar" />
            <p>Hello! I’m a junior web developer based in Charlotte, NC, with a passion for creating dynamic and user-friendly web applications. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have a solid foundation in HTML, CSS, and JavaScript.I am constantly exploring new technologies and best practices to improve my craft. I thrive in collaborative environments where I can contribute to projects while learning from experienced developers. I believe in the power of clean, maintainable code and the importance of effective communication within a team.
</p>
        </section>
    );
};

export default AboutMe;