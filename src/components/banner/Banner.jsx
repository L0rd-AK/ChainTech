import { FaCircleArrowRight } from "react-icons/fa6";
const Banner = () => {
    return (
        // ==================================== Banner ====================================
        <div className="min-h-screen flex flex-col justify-center items-center space-y-5 bg-black">
            <h1 className="font-bold text-white tracking-widest text-7xl poppins-black uppercase text-center">wellcome <br /> to <span className="bg-gradient-to-r from-[#00FFA7] to-[#FFFF00] text-transparent bg-clip-text">chaintech</span></h1>
            <p className="text-white text-center font-medium">From square one to engineering excellence! PixelPlex assists in full-cycle software <br /> development, jumps in to take it over, or brings dedicated top-demanded skills.</p>
            <button className="bg-white rounded-3xl text-black flex justify-center items-center py-3 gap-5 px-3 font-bold text-center">Get started <FaCircleArrowRight className="text-xl" /> </button>
        </div>
    );
};

export default Banner;