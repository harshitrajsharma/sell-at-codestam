import HowCard from "./HowCard"
import { howData } from "./HowCardData"

const HowWorks = () => {
    return (
        <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-16 py-8">
            <div className=' text-center flex flex-col items-center justify-center gap-4 py-6'>
                <h1 className=' text-4xl font-bold'>How <span className=' text-[#2462e9]'>Codestam Store </span> works</h1>
                <div className=" w-28 h-1 bg-white rounded-full" ></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 py-6">
                {howData.map((data, index) => <HowCard key={index} icon={data.icon} title={data.title} description={data.description} />)}
            </div>

            <div className="flex justify-center items-center">
            <button className=" rounded-lg text-black hover:text-white  bg-white px-6 py-3 hover:bg-[#2462e9] transition-all duration-300 ease-in-out ">Start Selling</button>
            </div>

        </div>
    )
}

export default HowWorks