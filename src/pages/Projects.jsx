import React, { useState } from 'react';
import hashIcon from '../assets/hash.svg';
import lineIcon from '../assets/Line.svg';
import Card from '../components/Card';

function Projects() {
  const [showAll, setShowAll] = useState(false); // State to manage card visibility

  // Function to toggle card visibility
  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  // Example cards array with project data
  const projects = [
    {
      name: 'Carbon Footprint Calculator For NATI CONSULTING SERVICES',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'ExpressJS', 'MongoDB', 'Mongoose', 'Redux' ],
    },
    {
      name: 'Project B',
      technologies: ['Vue.js', 'Express', 'Bootstrap'],
    },
    {
      name: 'Project C',
      technologies: ['Angular', 'Django', 'Sass'],
    },
    {
      name: 'Project D',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Project E',
      technologies: ['PHP', 'Laravel', 'MySQL'],
    },
    {
      name: 'Project F',
      technologies: ['Ruby', 'Rails', 'PostgreSQL'],
    },
  ];

  // Map the projects to Card components
  const cards = projects.map((project, index) => (
    <Card key={index} projectName={project.name} technologies={project.technologies} />
  ));

  return (
    <div className="flex flex-col p-4 mt-12">
      <div className="flex justify-between items-center ml-8 mb-8">
        <div className="flex items-center ml-4">
          <img src={hashIcon} alt="Hash Icon" className="w-6 h-6 ml-2" />
          <h1 className="text-2xl font-bold text-white ml-2">Projects</h1>
          <img src={lineIcon} alt="Line" className="ml-2 h-6 w-1/3" />
        </div>
        <a
          href="#"
          onClick={toggleShowAll} // Call toggle function on click
          className="text-white hover:underline mr-8 whitespace-nowrap"
          role="button"
          aria-expanded={showAll}
          aria-controls="projects"
        >
          {showAll ? 'View Less' : 'View All'} &gt;
        </a>
      </div>

      {/* Cards Container */}
      <div
        id="projects"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Render either the first three cards or all cards based on showAll state */}
        {showAll ? cards : cards.slice(0, 3)}
      </div>
    </div>
  );
}

export default Projects;
