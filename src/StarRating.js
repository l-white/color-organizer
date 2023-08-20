import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Star from './Star'

const createArray = (length) => [...Array(length)]

const StarRating = ({ totalStars = 5, selectedStars = 0 }) => {
  return (
    <>
      {createArray(totalStars).map((star, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  )
}

export default StarRating
