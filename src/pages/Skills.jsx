import React from 'react';
import hashIcon from '../assets/hash.svg'; // Adjust the path to your SVG file
import lineIcon from '../assets/Line.svg';
import skillIcon1 from '../assets/Rectangle 24.svg'; // Replace with your SVG paths
import skillIcon2 from '../assets/logo (1).svg';
import skillIcon3 from '../assets/Dots.svg';

function Skills() {
    return (
        <div className="ml-14 mt-12"> {/* Add mt-8 for space above the section */}
            <div className="flex items-center">
                <img src={hashIcon} alt="Hash Icon" className="w-6 h-6 ml-2" />
                <h1 className="text-2xl font-bold text-white ml-2">Skills</h1>
                <img src={lineIcon} alt="Line" className="ml-2 h-6 w-1/3" />
            </div>

            <div className="flex mt-6"> {/* Container for left and right sections */}
                {/* Left Side - 40% Width, Hidden on Mobile */}
                <div className="hidden md:flex w-2/5 flex-wrap justify-between"> {/* Using flex-wrap to arrange SVGs randomly */}
                    <div className="flex w-full justify-between"> {/* Flex to arrange images side by side */}
                        <img src={skillIcon3} alt="Skill 1" className="w-28 h-28 mt-9 animate-spin ml-16" />
                        <img src={skillIcon1} alt="Skill 2" className="w-28 h-28 mr-60 mt-11 animate-spin" />
                    </div>
                    <img src={skillIcon2} alt="Skill 2" className="w-28 h-28 ml-40 animate-spin" />
                    <img src={skillIcon3} alt="Skill 1" className="w-24 h-24 mr-16 animate-spin" />
                </div>

                {/* Right Side - 60% Width */}
                <div className="w-full md:w-3/5 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8"> {/* Flex container for the columns */}
                    {/* First Column */}
                    <div className="flex flex-col w-full md:w-1/3 p-4"> {/* First Column: 1/3 width with padding */}
                        <div className="border border-white w-full h-[300px] mb-2 flex flex-col justify-center items-center"> {/* Increased width and height */}
                            <h2 className="text-lg text-white">Frontend</h2>
                            <div className="border-b border-white w-3/4 mb-2" /> {/* White line below the heading */}
                            <p className="text-white">HTML <br /> CSS <br /> JavaScript <br /> ReactJS <br /> Bootstrap <br /> Tailwind CSS <br /> MaterialUI <br /> Axios <br /> Redux</p>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="flex flex-col w-full md:w-1/3 p-4"> {/* Second Column: 1/3 width with padding */}

                    <div className="border border-white w-full h-[200px] mb-2 flex flex-col justify-center items-center"> {/* Increased width and height */}
                            <h2 className="text-lg text-white">Backend</h2>
                            <div className="border-b border-white w-3/4 mb-2" /> {/* White line below the heading */}
                            <p className="text-white"> Node.js <br /> MongoDB <br /> MySQL <br />JSON Web Token (JWT) <br />Socket.IO <br /> Mongoose </p>

                        </div>
                        <div className="border border-white w-full h-[120px] mb-2 flex flex-col justify-center items-center"> {/* Increased width and height */}
                            <h2 className="text-lg text-white">Framework</h2>
                            <div className="border-b border-white w-3/4 mb-2" /> {/* White line below the heading */}
                            <p className="text-white">ExpressJS <br /> Sequelize </p>
                        </div>
                    </div>


                    {/* Third Column */}
                    <div className="flex flex-col w-full md:w-1/3 p-4"> {/* Added padding for spacing */}
                        <div className="border border-white w-full h-[160px] mb-4 flex flex-col justify-center items-center"> {/* Increased width and height */}
                            <h2 className="text-lg text-white">Database</h2>
                            <div className="border-b border-white w-3/4 mb-2" /> {/* White line below the heading */}
                            <p className="text-white">MongoDB <br /> MySQL <br />Sequelize <br /> Redis</p>
                        </div>
                        <div className="border border-white w-full h-[210px] mb-2 flex flex-col justify-center items-center"> {/* Increased width and height */}
                            <h2 className="text-lg text-white"> Tools</h2>
                            <div className="border-b border-white w-3/4 mb-2" /> {/* White line below the heading */}
                            <p className="text-white">Git  <br /> GitHub <br /> Postman  <br /> Insomnia  <br /> NPM <br /> AWS  </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;
