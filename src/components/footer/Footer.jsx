import logo from "../../assets/logo.png"
const Footer = () => {
    return (
        // ==================================== Footer ====================================
        <footer className="bg-black py-5">
            <div className="flex flex-col justify-center items-center space-y-5">
                <div className="w-40 h-5" ><img src={logo} alt="" /></div>
                <hr className="text-[#5E5E5E] h-5" />
                <p className="text-[#98A6AC]">© 2024 All Rights Reserved -  Chaintech Network</p>
            </div>
        </footer>
    );
};

export default Footer;