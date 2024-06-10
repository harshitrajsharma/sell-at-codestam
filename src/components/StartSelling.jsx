const StartSelling = () => {
    return (
        <div className=" py-8 lg:py-6 h-auto md:h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row gap-12">


                {/* <div className="flex md:w-1/2 justify-center items-center mx-auto rounded-3xl">
                    <img className="my-auto" src="./selling.png" width={"100%"} />
                </div> */}


                <div className=" flex flex-col items-center justify-center gap-4">
                    <p>Startups & digital creators</p>
                    <h1 className="text-3xl text-center lg:text-5xl font-bold leading-12 lg:leading-20">List products today.</h1>
                    <h1 className="text-xl text-[#2462e9] text-center md:text-start lg:text-3xl font-bold pb-6 leading-12 lg:leading-20">Get sales tomorrow.</h1>
                    <p className="text-base md:text-lg text-center md:text-start ">
                        Sell your digital products on Codestam Store. Get the exposure, sales, feedback, and new customers you've been searching for.
                    </p>
                    <div className="mt-6 py-3 flex justify-center md:justify-start">
                        <a href='https://store.codestam.com/seller-portal' className=" rounded-lg text-black hover:text-white  bg-white px-6 py-3 hover:bg-[#2462e9] transition-all duration-300 ease-in-out ">Start Selling</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default StartSelling
