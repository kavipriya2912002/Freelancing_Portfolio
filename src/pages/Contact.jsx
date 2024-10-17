import React from 'react';
import hashIcon from '../assets/hash.svg'; // Adjust the path to your SVG file
import lineIcon from '../assets/Line.svg';

function Contact() {
  return (
    <div className="flex flex-col items-center ml-12 mt-12">
      <div className="flex items-center">
        <img src={hashIcon} alt="Hash Icon" className="w-6 h-6 ml-2" />
        <h1 className="text-2xl font-bold text-white ml-2">Contact</h1>
        <img src={lineIcon} alt="Line" className="ml-2 h-6 w-1/3" />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl px-4 md:px-0">
        {/* Email Box */}
        <div className="border border-white p-4 rounded-lg shadow-lg text-white text-center">
          <h2 className="font-semibold text-lg">Email</h2>
          <p className="mt-2">skillscope05@gmail.com</p>
        </div>

        {/* Phone Number Box */}
        <div className="border border-white p-4 rounded-lg shadow-lg text-white text-center">
          <h2 className="font-semibold text-lg">Phone</h2>
          <p className="mt-2">8870854239</p>
        </div>

        {/* Address Box */}
        <div className="border border-white p-4 rounded-lg shadow-lg text-white text-center">
          <h2 className="font-semibold text-lg">Address</h2>
          <p className="mt-2">Chennai, India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;