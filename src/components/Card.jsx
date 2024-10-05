import React from 'react';
import image from '../assets/top-MERN-Stack.webp';

function Card() {
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
          <li>React</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          {/* Add more technologies as needed */}
        </ul>
      </div>

      {/* Third Div: Project Name */}
      <div className="p-4 border-t border-white">
        <h2 className="text-white text-xl">Project Name</h2>
        
      </div>
    </div>
  );
}

export default Card;
