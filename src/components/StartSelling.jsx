import React from 'react'

const StartSelling = () => {
    return (
        <div className=" px-5 py-8 lg:px-10 xl:px-16 lg:py-6 h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row gap-12">


                <div className="flex md:w-1/2 justify-center items-center mx-auto rounded-3xl">
                    <img className="my-auto" src="./selling.png" width={"100%"} />
                </div>


                <div className="md:w-[60%] md:pr-28 md:pl-4 md:py-12 md:text-left xl:gap-6 flex flex-col justify-center ">
                    <p>Startups & digital creators</p>
                    <h1 className="text-3xl text-center md:text-start lg:text-5xl font-bold leading-12 lg:leading-20">List products today.</h1>
                    <h1 className="text-xl text-[#2462e9] text-center md:text-start lg:text-3xl font-bold pb-6 leading-12 lg:leading-20">Get sales tomorrow.</h1>
                    <p className="text-base md:text-lg text-center md:text-start ">
                        Sell your digital products on Codestam Store. Get the exposure, sales, feedback, and new customers you've been searching for.
                    </p>
                    <div className="mt-6 py-3 flex justify-center md:justify-start">
                        <button className=" rounded-lg text-black hover:text-white  bg-white px-6 py-3 hover:bg-[#2462e9] transition-all duration-300 ease-in-out ">Start Selling</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default StartSelling
