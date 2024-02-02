import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 p-2'>
      <img
       alt= "MovieCard" 
       src={IMG_CDN_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard
