import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
       <div className="md:pt-48 pt-20 p-4">
         <h1 className='md:text-4xl text-2xl font-bold md:p-4  m-2'>{title}</h1>
         <h4 className='md:p-4 m-2 md:w-1/3 w-2/4 text-xs md:text-lg'>{overview}</h4>
         </div>
         <div className='md:px-12 px-6'>
         <button className='md:text-lg text-sm text-black md:p-3 p-1 px-3 mr-3 w-22 md:w-32 rounded-lg font-semibold bg-white hover:opacity-80'>Play</button>
         <button className='md:text-lg text-sm  bg-gray-500 bg-opacity-60  text-white md:p-3 p-1 px-3 w-22 md:w-32 rounded-lg font-semibold'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
