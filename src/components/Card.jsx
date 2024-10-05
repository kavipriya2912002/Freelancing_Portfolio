import React from 'react';
import image from '../assets/top-MERN-Stack.webp';

function Card({ projectName, technologies }) { // Accept projectName and technologies as props
  return (
    <div className="border border-white rounded-lg shadow-lg max-w-sm mx-auto my-8"> {/* Increased space above and below the card */}
      {/* First Div: Project Image */}
      <div className="p-4">
        <img 
          src={image} 
          alt="Project" 
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Second Div: Technologies Used */}
      <div className="p-4">
        <h3 className="text-white text-lg">Technologies Used:</h3>
        <ul className="flex flex-wrap text-white space-x-2"> {/* Use flex for inline display */}
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li> // Display each technology
          ))}
        </ul>
      </div>

      {/* Third Div: Project Name */}
      <div className="p-4 border-t border-white">
        <h2 className="text-white text-xl">{projectName}</h2> {/* Display project name */}
      </div>
    </div>
  );
}

export default Card;
