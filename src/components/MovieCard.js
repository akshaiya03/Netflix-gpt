import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='md:w-[160px] w-[110px] p-2 hover:opacity-40 inline-block cursor-pointer'>
      <img
      className='w-full h-auto'
       alt= "MovieCard" 
       src={IMG_CDN_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard
