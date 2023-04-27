import { useState } from "react";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
    //*NavMenu Function
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] xl:max-w-[1500px] mx-auto px-4 text-white ">
            <h1 className="w-full text-5xl font-bold text-[#00df9a]">
                Tri<span className="w-full text-3xl font-bold text-white"> Finances</span>
            </h1>
            <nav className="hidden md:flex text-white">
                <a href="#" className="p-4 group  transition duration-300">
                    Home
                    <span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                </a>
                <a href="#" className="p-4 group transition duration-300">
                    Company
                    <span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                </a>
                <a href="#" className="p-4 group transition duration-300">
                    Resources
                    <span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                </a>
                <a href="#" className="p-4 group transition duration-300">
                    About
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                </a>
                <a href="#" className="p-4 group transition duration-300">
                    Contact
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                </a>
            </nav>
            <div className="block md:hidden" onClick={handleNav}>
                {!nav ? <RiMenu4Line className="animate-pulse" size={40} /> : <RiCloseFill className="animate-pulse" size={40} />}
            </div>
            <div
                className={
                    !nav
                        ? "bg-black/40 backdrop-blur-md h-full fixed left-[-150%] top-0 w-[60%] border-r border-r-gray-900  ease-in-out duration-500"
                        : "bg-black/40 backdrop-blur-md h-full fixed left-0 top-0 w-[60%] border-r border-r-gray-900  ease-in-out duration-500"
                }
            >
                <h1 className="w-full text-3xl font-bold text-green-400 m-4">REACT.</h1>
                <div className="uppercase p-4 flex flex-col">
                    <a className="p-4 border-b border-gray-600">Home</a>
                    <a className="p-4 border-b border-gray-600">Company</a>
                    <a className="p-4 border-b border-gray-600">Resources</a>
                    <a className="p-4 border-b border-gray-600">About</a>
                    <a className="p-4">Contact</a>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
