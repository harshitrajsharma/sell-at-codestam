import React from 'react'

const HowCard = (props) => {
    return (
        <div className={`p-4 rounded-xl w-full flex flex-col gap-4  `}>
            <div className=' flex justify-center items-center'>
                <img className=' w-20 h-20' src={props.icon} alt="" />
            </div>

            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='flex gap-2  items-center text-lg font-bold'>{props.title}</h1>
                <p className=' text-gray-300 text-md text-center'>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default HowCard
