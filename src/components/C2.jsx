import React from 'react'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import SellingCard from './SellingCard';
import { data } from "./CardData"

const C1 = () => {
    return (
        <div className=' flex flex-col md:flex-row gap-4'>
            <div className='flex border-2 p-8 gap-6 border-gray-800  bg-[#2c282885] rounded-xl md:w-[50%]'>
                <div className='flex flex-col  justify-center gap-6 py-4'>

                    <div>
                        <img className='rounded-xl' src="./banner1.png" alt="banner" />
                    </div>

                    <div className='flex flex-col  justify-center gap-6 py-4'>
                        <h1 className='flex gap-4 items-center text-[#e9614f] font-medium '><RiMoneyDollarCircleLine className=' scale-150' /> Devlopers all at you service</h1>
                        <h1 className=' text-4xl font-bold '>
                            Get help building your ideas
                        </h1>
                        <p className=' text-gray-300'>
                            You can enlist the services of a developer from within Whop's platform at no cost to have your concept professionally crafted and brought to fruition.
                        </p>
                        <div>
                            <button className='text-white px-4 py-1 border-2 font-bold rounded bg-[#2d272785] hover:bg-[#2d2727ab] border-gray-800 hover:border-gray-900 hover:scale-[1.05]'>Available for limited time only</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' md:w-[50%] flex border-2 p-8 gap-6 border-gray-800  bg-[#2c282885] rounded-xl '>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col  gap-6 py-4'>
                        <h1 className='flex gap-4 items-center text-[#e9614f] font-medium '><RiMoneyDollarCircleLine className=' scale-150' /> Easy to use API</h1>
                        <h1 className=' text-4xl font-bold '>
                            Build apps yourself
                        </h1>
                        <p className=' text-gray-300'>
                            Integrate Whop's payment, membership, and fulfillment features into your software with just a few lines of code.
                        </p>
                    </div>
                    <div>
                        <img className='rounded-xl' src="./banner2.png" alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default C1
