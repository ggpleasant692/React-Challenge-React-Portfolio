import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
    );
};

export default Project;