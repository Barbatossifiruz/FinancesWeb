import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
    return (
        <section className="grid grid-cols-2 w-full bg-white content-center gap-3">
            <div className="max-w-[1250px] col-span-2 md:col-span-1 mx-auto w-full p-9">
                <img src={Laptop} alt="" />
            </div>
            <div className="col-span-2 col  md:col-span-1 w-full p-9 self-center text-center md:text-start">
                <h3 className="text-md lg:text-lg font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</h3>
                <h4 className="text-2xl lg:text-5xl font-semibold py-2">Manage Data Analytics Centrally</h4>
                <p className="text-md lg:text-xl font-semibold text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non accusamus nihil atque cupiditate autem blanditiis facere
                    quibusdam quam consequatur quisquam sit reprehenderit similique adipisci eum exercitationem, modi, sunt totam dicta repellat rerum
                    aperiam nostrum amet? Laborum facilis consectetur molestiae.
                </p>
                <button className="p-4 py-3 text-[#00df9a] mx-auto text-xl my-9 w-[200px] bg-black rounded-md transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300 ">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default Analytics;
// Video en 41:00
