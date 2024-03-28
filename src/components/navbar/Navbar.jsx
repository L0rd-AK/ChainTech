import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import './Navbar.css'
const Navbar = () => {
    return (
        // ========================== Navbar ==========================
        <nav className="bg-black text-white">
            <div className="navbar lg:max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                         {/* ========================== nav items for mobile view ========================== */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                            <NavLink to='/'><li><a>Company</a></li></NavLink>
                            <NavLink to='/service'><li><a>Service</a></li></NavLink>
                            <NavLink to='/business-model'><li><a>Business Models</a></li></NavLink>
                            <NavLink to='/blogs'><li><a>Blogs</a></li></NavLink>
                            <NavLink to='/contact-us'><li><a>Contact Us</a></li></NavLink>
                        </ul>
                    </div>
                    <div>
                        <img className="w-full h-8" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    {/* ========================== nav items for laptop-desktop view ========================== */}
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><a><NavLink to='/'>Company</NavLink></a></li>
                        <li><a><NavLink to='/service'>Service</NavLink></a></li>
                        <li><a><NavLink to='/business-model'>Business Models</NavLink></a></li>
                        <li><a><NavLink to='/blogs'>Blogs</NavLink></a></li>
                        <li><a><NavLink to='/contact-us'>Contact Us</NavLink></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;