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
          <h2 className="text-xl md:text-2xl font-semibold">Our Freelancing Full Stack Project</h2>
          <p className="mt-2 text-justify text-base md:text-lg"> {/* Adjusted text size for desktop */}
            At <span className='fontStyle'>skillscope</span>, we specialize in delivering cutting-edge full-stack development solutions
            tailored to your business needs. Our team brings expertise in a range of modern technologies,
            including <span className='fontStyle'>MERN (MongoDB, Express, React, Node.js), SQL, and Golang</span>. We are passionate about crafting scalable,
            efficient, and responsive web applications that power seamless user experiences.
          </p>
          <p className="mt-2 text-justify text-base md:text-lg"> {/* Adjusted text size for desktop */}
            Whether you're looking to build a dynamic website, a robust backend system,
            or a fully integrated web platform, our developers ensure that every project is completed with precision,
            innovation, and best-in-class performance. We pride ourselves on delivering custom solutions that not only
            meet but exceed expectations.
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