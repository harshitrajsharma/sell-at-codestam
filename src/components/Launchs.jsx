import LaunchCard from "./LaunchCard"
import { launchData } from "./launchData"

const Launchs = () => {
    return (
        <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-16 py-8">
            <div className=' text-center flex flex-col items-center justify-center gap-4 py-6'>
                <h1 className=' text-4xl font-bold'>We've launched thousands of digital <br /> products-yours can be one of them.</h1>
            </div>

            <div className="grid md:grid-cols-3 gap-6 py-6">
                {launchData.map((data, index) => <LaunchCard key={index} icon={data.icon} title={data.title} description={data.description} />)}
            </div>
        </div>
    )
}

export default Launchs