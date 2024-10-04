import logo from '../assets/Logo.svg';
import hashIcon from '../assets/hash.svg';

function Navbar() {
  return (
    <nav className="bg-[#282C33] h-16 flex justify-start items-center px-8">
      <div className="flex items-center ml-12">
        <img src={logo} alt="Logo" className="h-10 ml-11" /> {/* Added margin-left */}
        {/* Logo Name */}
        <span className="text-white text-xl font-semibold ml-2">SkillScope</span>
      </div>
      {/* Links will be hidden on small screens */}
      <div className="links space-x-8 text-white flex items-center ml-40 hidden md:flex">
        <a href="#home" className="hover:text-gray-400 flex items-center">
          <img src={hashIcon} alt="hash" className="h-4 mr-1" />
          Home
        </a>
        <a href="#projects" className="hover:text-gray-400 flex items-center">
          <img src={hashIcon} alt="hash" className="h-4 mr-1" />
          Projects
        </a>
        <a href="#about" className="hover:text-gray-400 flex items-center">
          <img src={hashIcon} alt="hash" className="h-4 mr-1" />
          About
        </a>
        <a href="#contact" className="hover:text-gray-400 flex items-center">
          <img src={hashIcon} alt="hash" className="h-4 mr-1" />
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
