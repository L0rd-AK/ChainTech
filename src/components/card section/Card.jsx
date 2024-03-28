import { FaCircleArrowRight } from "react-icons/fa6";
import cardLogo from '../../assets/card-logo.jpeg'
const Card = ({card}) => {
    return (
        // ====================== This is a single card, we are using this same code again and again ======================
        <div style={{ backgroundColor: `${card?.backGround}`}} className={`rounded-lg border-4 border-black flex flex-col`}>
            <div className="my-3 flex-grow">
                <div className="flex justify-center items-center gap-3">
                    <div>
                        <img className="w-[30px] h-[30px]" src={cardLogo} alt="" />
                    </div>
                    <h3 className="font-bold poppins-semibold text-xl">Join Development</h3>
                </div>
            </div>
            <div className="border-y-4 border-black flex-grow">
                <h1 className="font-bold poppins-semibold text-2xl text-center my-4">{card.title}</h1>
                <img className="my-10" src={card.img} alt="" />
            </div>
            <div className="flex justify-end my-2 ">
                <button className="bg-white rounded-3xl mr-5 text-black flex justify-center items-center py-3 gap-5 px-6 font-bold text-center border-black border-2 hover:bg-black hover:text-white focus:scale-95 justify-self-end">Explore <FaCircleArrowRight className="text-xl bg-gradient-to-r from-[#00FFA7] to-[#FFFF00]  bg-clip-text" /> </button>
            </div>
        </div>
    );
};

export default Card;