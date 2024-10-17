import Navbar from './Navbar'; // Adjust the path if necessary
import mainImage from '../assets/Image.svg'; // Main image path
import backgroundImage from '../assets/logo (1).svg'; // Background image path
import doubleQuoteSVG from '../assets/double.svg'; // Import your double quote SVG
import Projects from './Projects'; // Import the Projects component
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    return (
        <div className="bg-[#282C33] min-h-screen flex flex-col">
            <Navbar />
            <div id="home" className="flex-grow flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 mt-14">
                {/* Left Side */}
                <div className="text-white space-y-4 flex-grow mb-8 md:mb-0 mt-12 md:mt-0 text-center md:text-left">
                    <h1 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold">
                        In Skillscope, we create <span className='fontStyle'>innovative web applications</span> <br />
                        and solutions that deliver <span className='fontStyle'>exceptional user experiences</span> <br />
                        while ensuring seamless performance and scalability.
                    </h1>
                    <p className="text-lg md:text-xl lg:text-xl xl:text-xl">
                        We craft responsive websites where technologies meet creativity.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="border border-[#C778DD] text-[#C778DD] px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded bg-transparent hover:bg-[#C778DD] hover:text-white transition">
                            Contact us!
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative flex-shrink-0 flex flex-col items-center justify-center md:mr-12 lg:mr-16 xl:mr-24">
                    <div className="flex justify-center">
                        <img
                            src={backgroundImage}
                            alt="Background"
                            className="absolute -translate-x-1/2 animate-pulse top-4 md:top-8 lg:top-12 z-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 mr-9"
                        />
                        <img
                            src={mainImage}
                            alt="Main"
                            className="relative z-10 w-48 h-40 md:w-64 md:h-52 lg:w-[469px] lg:h-[386px]"
                        />
                    </div>
                </div>
            </div>

            {/* Centered Quote and Author Below */}
            <div className="flex flex-col items-center mt-12 px-4">
                <div className="flex justify-between items-start animate-pulse max-w-3xl w-full">
                    <div className="relative border border-white text-white py-4 px-8 rounded-md text-center flex-grow mr-4">
                        <img
                            src={doubleQuoteSVG}
                            alt="Double Quote"
                            className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10"
                        />
                        <img
                            src={doubleQuoteSVG}
                            alt="Double Quote"
                            className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-8 h-8 md:w-10 md:h-10"
                        />
                        <p className="text-lg md:text-xl lg:text-2xl">
                            "Design is not just what it looks like and feels like. Design is how it works."
                        </p>
                    </div>
                </div>
                <div className="border border-white text-white py-2 px-4 rounded-md mt-4 text-center">
                    <p className="text-sm">- Steve Jobs</p>
                </div>
            </div>

            <div id="projects">
                <Projects /> {/* Render Projects component */}
            </div>

            <div id="skills">
                <Skills /> {/* Render Skills component */}
            </div>

            <div id="about">
                <About /> {/* Render About component */}
            </div>

            <div id="contact">
                <Contact /> {/* Render Contact component */}
            </div>

            <Footer /> {/* Footer */}
        </div>
    );
}

export default Home;