import React from 'react'

const SellingCard = (props) => {
  return (
    <div className={`p-4 border-2 border-gray-800 hover:border-gray-900 rounded-xl bg-[#2d272785] hover:bg-[#2d2727ab] w-full flex flex-col gap-4 hover:scale-[1.05] `}>
      <h1 className='flex gap-2  items-center text-sm font-bold'><img className=' w-4 h-4' src={props.icon} alt="" />{props.title}</h1>
      <p className=' text-gray-300 text-xs'>
        {props.description}
      </p>
    </div>
  )
}

export default SellingCard
