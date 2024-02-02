import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
       <div className="pt-48 p-4">
         <h1 className='text-4xl font-bold p-4  m-2'>{title}</h1>
         <h4 className='p-4 m-2 w-1/3'>{overview}</h4>
         </div>
         <div className='px-12'>
         <button className='text-lg  text-black p-3 px-3 mr-3 w-32 rounded-lg font-semibold bg-white hover:opacity-80'>Play</button>
         <button className='text-lg bg-gray-500 bg-opacity-60  text-white p-3 px-3 w-32 rounded-lg font-semibold'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
