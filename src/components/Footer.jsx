import { RiFacebookBoxFill, RiInstagramLine, RiGithubFill, RiLinkedinBoxFill, RiBitCoinFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400">
            <div className="p-3 text-center md:text-start">
                <h1 className="w-full text-5xl font-bold text-[#00df9a]">
                    Tri<span className="w-full text-3xl font-bold text-white"> Finances</span>
                </h1>
                <p className="text-white pt-5 font-semibold text-md">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora officia cumque quas voluptate amet quam hic debitis, quos
                    eligendi saepe blanditiis maxime ullam sit molestiae, veniam est aliquid perferendis. Dignissimos.
                </p>
                <div className="w-full text-white flex p-8 justify-between  md:justify-start md:gap-10">
                    <a href="" className="transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300 hover:text-[#00df9a]">
                        <RiFacebookBoxFill className="text-4xl transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300 hover:text-[#00df9a]" />
                    </a>
                    <a href="">
                        <RiInstagramLine className="text-4xl transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300 hover:text-[#00df9a]" />
                    </a>
                    <a href="">
                        <RiGithubFill className="text-4xl transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300 hover:text-[#00df9a]" />
                    </a>
                    <a href="">
                        <RiLinkedinBoxFill className="text-4xl transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300 hover:text-[#00df9a]" />
                    </a>
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between mt-6  p-4">
                <div>
                    <h6 className="font-medium text-gray-300">Support</h6>
                    <ul>
                        <li className="py-2 text-sm group transition duration-300">
                            Pricing
                            <span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                        <li className="py-2 text-sm group transition duration-300">
                            Documentation
                            <span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                        <li className="py-2 text-sm group transition duration-300">
                            Guides<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                        <li className="py-2 text-sm group transition duration-300">
                            API Status<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-300">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm group transition duration-300">
                            Analytics<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                        <li className="py-2 text-sm group transition duration-300">
                            Marketing<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                        <li className="py-2 text-sm group transition duration-300">
                            Commerce<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                        <li className="py-2 text-sm group transition duration-300">
                            Insights<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-300">Company</h6>
                    <ul>
                        <li className="py-2 text-sm group transition duration-300">
                            About<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                        <li className="py-2 text-sm group transition duration-300">
                            Blog<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                        <li className="py-2 text-sm group transition duration-300">
                            Jobs<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                        <li className="py-2 text-sm group transition duration-300">
                            Press<span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full text-lg mx-auto col-span-3 justify-center text-center">
                <span className="flex justify-center">
                    &copy; Copyright 2023 All rights reserved
                    <a className=" font-bold text-[#00df9a] mx-2">
                        Tri <span className=" font-meddium text-white"> Finance </span>
                    </a>
                    and Caraota
                    <RiBitCoinFill className="mx-2 text-yellow-500 mt-1" size={25} />
                    Coin
                </span>
            </div>
        </footer>
    );
};

export default Footer;
