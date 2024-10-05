import React from 'react';
import lineIcon from '../assets/Line.svg';

function Footer() {
  return (
    <div className="flex flex-col items-center mt-16"> {/* Adjust margin-top for spacing */}
      <div className="flex justify-center w-full mb-4"> {/* Centering line icon */}
        <img src={lineIcon} alt="Line" className="h-6 w-1/3" />
      </div>

      <div className="flex flex-col items-center text-white text-center">
        <p className="mb-2">© 2024 Skillscope. All Rights Reserved.</p>
        <p className="mb-2">Follow us on:</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
