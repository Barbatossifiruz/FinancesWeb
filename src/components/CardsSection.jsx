import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
    return (
        <section className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                    <p className="text-center text-4xl font-bold">
                        <span>$</span>149
                    </p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                </div>
                <div className="w-full bg-white md:bg-gray-300 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
                    <p className="text-center text-4xl font-bold">
                        <span>$</span>149
                    </p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] md:text-[#00df9a] md:bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                        Start Trial
                    </button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
                    <p className="text-center text-4xl font-bold">
                        <span>$</span>149
                    </p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                </div>
            </div>
        </section>
    );
};

export default Cards;
