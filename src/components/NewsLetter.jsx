const NewsLetter = () => {
    return (
        <section className="w-full py-16  text-white px-4">
            <div className="text-center md:text-start max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 self-center mb-9">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className=" flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter your email" />
                        <button className="p-4 py-3 sm:ml-5  px-6 text-sm text-black mx-auto xl:text-lg my-9 w-[200px] xl:w-1/2 h-auto bg-[#00df9a] rounded-md transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300 ">
                            Notify me
                        </button>
                    </div>
                    <p>
                        We care bout the protection of your data. Read our <span className=" text-[#00df9a] underline">Privacy policy.</span>{" "}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
