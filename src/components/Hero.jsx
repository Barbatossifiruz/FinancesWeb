import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section className="text-white">
            <div className="lg:max-w-[1000px] max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
                <div className="flex justify-center items-center w-full">
                    <p className="md:text-3xl xl:text-5xl sm:text-4xl text-xl font-bold">Fast, flexible Financing for </p>
                    <div className="text-gray-500 xl:text-5xl md:text-3xl sm:text-4xl text-xl font-bold pl-3 ">
                        <Typewriter
                            options={{
                                strings: ["TLC.", "  AREPA COIN."],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <p className="text-center md:text-2xl text-xl font-bold text-gray-500 pt-9 md:px-4">
                    Monitor your data analitics to increase revenue for BTC, CTP, & AREPA COIN platforms.
                </p>
                <button className="p-4 py-3 text-black mx-auto text-xl my-9 w-[200px] bg-[#00df9a] rounded-md transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300 ">
                    Ready to join <span>Us</span>
                </button>
            </div>
        </section>
    );
};

export default Hero;
