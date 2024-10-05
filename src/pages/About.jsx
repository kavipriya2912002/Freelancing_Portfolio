import React from 'react';
import hashIcon from '../assets/hash.svg'; // Adjust the path to your SVG file
import lineIcon from '../assets/Line.svg';
import projectImage from '../assets/groupAbout.svg'; // Replace with the correct path to your image

function About() {
  return (
    <div className="flex flex-col items-center ml-14 mt-12">
      <div className="flex items-center">
        <img src={hashIcon} alt="Hash Icon" className="w-6 h-6 ml-2" />
        <h1 className="text-2xl font-bold text-white ml-2">About</h1>
        <img src={lineIcon} alt="Line" className="ml-2 h-6 w-1/3" />
      </div>

      <div className="flex mt-10 w-full">
        <div className="flex-1 p-4 text-white"> {/* Allowing more width by using flex-1 */}
          <h2 className="text-xl font-semibold">Our Freelancing Full Stack Project</h2>
          <p className="mt-2 text-justify"> {/* Added text-justify class */}
            In this project, we developed a comprehensive web application that provides various functionalities 
            to users. Our team worked on both the frontend and backend, utilizing technologies such as React, 
            Node.js, Express, and MongoDB. The goal was to create a user-friendly interface while ensuring 
            robust performance and security on the server side.
          </p>
          <p className="mt-2 text-justify"> {/* Added text-justify class */}
            Throughout the project, we focused on implementing best practices in coding and design, ensuring 
            a seamless experience for our users. The application includes features like user authentication, 
            data visualization, and responsive design, making it accessible on any device.
          </p>
        </div>
        <div className="hidden md:flex md:flex-[0.4] p-4 justify-center items-center"> {/* Right side: 40% */}
          <img 
            src={projectImage} 
            alt="Project" 
            className="w-[343px] h-[508px] rounded-lg" // Set specific width and height
          />
        </div>
      </div>
    </div>
  );
}

export default About;
