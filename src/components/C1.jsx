import { RiMoneyDollarCircleLine } from "react-icons/ri";
import SellingCard from './SellingCard';
import { data } from "./CardData"

const C1 = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row border-2 p-8 gap-6 border-gray-800  bg-[#2c282885] rounded-xl'>
      <div className='flex flex-col  justify-center gap-6 py-4 md:w-[40%]'>
        <h1 className='flex gap-4 items-center text-[#e9614f] font-medium '><RiMoneyDollarCircleLine className=' scale-150' /> Make money</h1>
        <h1 className=' text-4xl font-bold '>
          Sell pre-built applications
        </h1>
        {/* <p className=' text-gray-300'>
          Add your pre built digital products with
        </p> */}
        <div>
          <button className='text-white px-4 py-1 border-2 font-bold rounded bg-[#2d272785] hover:bg-[#2d2727ab] border-gray-800 hover:border-gray-900 hover:scale-[1.05]'>Start Selling</button>
        </div>
      </div>
      <div className=' md:w-[60%] flex flex-col gap-4 '>
        <div className=' flex gap-4 flex-wrap md:flex-nowrap justify-center'>
          <SellingCard icon={data[0].icon} title={data[0].title} description={data[0].description} />
          <SellingCard icon={data[1].icon} title={data[1].title} description={data[1].description} />
        </div>
        <div className=' flex gap-4 flex-wrap md:flex-nowrap justify-center'>
          <SellingCard icon={data[2].icon} title={data[2].title} description={data[2].description} />
          <SellingCard icon={data[3].icon} title={data[3].title} description={data[3].description} />
          <SellingCard icon={data[4].icon} title={data[4].title} description={data[4].description} />
        </div>
        <div className=' flex gap-4 flex-wrap md:flex-nowrap justify-center'>
          <SellingCard icon={data[5].icon} title={data[5].title} description={data[5].description} />
          <SellingCard icon={data[6].icon} title={data[6].title} description={data[6].description} />
        </div>
      </div>
    </div>
  )
}

export default C1
