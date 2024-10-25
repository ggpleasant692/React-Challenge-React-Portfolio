import React from 'react';

const projects = [
  {
    title: 'Web API Blog',
    image: 'src/assets/blogapi.png', 
    deployedLink: 'https://ggpleasant692.github.io/task_board_3rdparty_api/',
    githubLink: 'https://github.com/ggpleasant692/task_board_3rdparty_api',
  },
  {
    title: 'SEO Refactoring',
    image: 'src/assets/SEOss.png',
    deployedLink: 'http://127.0.0.1:5500/index.html',
    githubLink: 'https://github.com/ggpleasant692/html-seo-refactor',
  },
  {
    title: 'CSS Portfolio',
    image: 'src/assets/PortfolioSS.png',
    deployedLink: 'https://ggpleasant692.github.io/html-css-portfolio/',
    githubLink: 'https://github.com/ggpleasant692/html-css-portfolio',
  },
  {
    title: 'Javascript Functions',
    image: 'src/assets/JSfunctions.png',
    deployedLink: 'https://ggpleasant692.github.io/javascript-functions/',
    githubLink: 'https://github.com/ggpleasant692/javascript-functions',
  },
  {
    title: 'Event Finder',
    image: 'src/assets/eventfinderss.png',
    deployedLink: 'https://mern-event-finder.onrender.com/',
    githubLink: 'https://github.com/zoniaramirez/MERN-event-finder',
  },
  {
    title: 'Music Trivia',
    image: 'src/assets/musictrivia.jpeg',
    deployedLink: 'https://music-trivia-app.onrender.com/',
    githubLink: 'https://github.com/lllewell/music-trivia-app',
  },
 
];

const Portfolio = () => {
  return (
    <section>
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;