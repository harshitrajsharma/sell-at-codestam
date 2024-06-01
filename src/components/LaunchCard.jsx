import React from 'react'

const LaunchCard = (props) => {
    return (
        <div className={`p-4 rounded-xl w-full flex flex-col gap-4  `}>
            <div className=' flex justify-center items-center'>
                <h1 className='flex gap-2  items-center text-4xl font-bold'>{props.title}</h1>
            </div>

            <div className='flex flex-col justify-center items-center gap-4'>

                <p className=' text-gray-300 text-md text-center'>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default LaunchCard
