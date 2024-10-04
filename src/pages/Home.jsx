import Navbar from './Navbar'; // Adjust the path if necessary
import mainImage from '../assets/Image.svg'; // Main image path
import backgroundImage from '../assets/logo (1).svg'; // Background image path

function Home() {
    return (
        <div className="bg-[#282C33] min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-col md:flex-row items-center justify-between px-8">
                
                {/* Left Side */}
                <div className="text-white space-y-4 max-w-md md:ml-28 mb-8 md:mb-0 mt-12 md:mt-0"> {/* Added margin-top for spacing */}
                    <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left md:whitespace-nowrap"> {/* Prevent wrapping */}
                        Elias is a <span className='fontStyle'> web designer</span> and <span className='fontStyle'>front-end developer</span> 
                    </h1>
                    <p className="text-lg md:text-xl text-center md:text-left md:whitespace-nowrap"> {/* Prevent wrapping */}
                        He crafts responsive websites where technologies meet creativity
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="border border-[#C778DD] text-[#C778DD] px-6 py-3 rounded bg-transparent hover:bg-[#C778DD] hover:text-white transition">
                            Contact me!!
                        </button>
                    </div>
                </div>
                
                {/* Right Side */}
                <div className="relative flex-shrink-0 md:mr-24 flex justify-center"> {/* Added margin-right for larger screens */}
                    <img 
                        src={backgroundImage} 
                        alt="Background" 
                        className="absolute left-1/2 transform -translate-x-1/2 top-8 md:top-16 z-0 w-32 h-32 md:w-40 md:h-40 object-cover" 
                    />
                    <img 
                        src={mainImage} 
                        alt="Main" 
                        className="relative z-10 w-64 h-52 md:w-[469px] md:h-[386px]" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
