import React, { useState } from 'react';
import hashIcon from '../assets/hash.svg'; // Adjust the path to your SVG file
import lineIcon from '../assets/Line.svg'; // Import your line SVG file
import Card from '../components/Card'; // Make sure to import your Card component

function Projects() {
  const [showAll, setShowAll] = useState(false); // State to manage card visibility

  // Function to toggle card visibility
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Example cards array (you can replace this with your actual data)
  const cards = [1, 2, 3, 4, 5, 6].map((_, index) => <Card key={index} />);

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
        >
          {showAll ? 'View Less' : 'View All'} &gt;
        </a>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Render either the first three cards or all cards based on showAll state */}
        {showAll ? cards : cards.slice(0, 3)}
      </div>
    </div>
  );
}

export default Projects;
