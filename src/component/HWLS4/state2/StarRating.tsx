import React from 'react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa';
interface Props  {
    maxStars?: number; // Số sao tối đa, mặc định là 5
    onRate?: (rating: number) => void; // Callback khi người dùng đánh giá
}

const StarRating :React.FC<Props> =({ maxStars = 5, onRate }) => {
const [rating, setRating] = useState<number>(0);
const [hoveredStar ,setHoveredStar] = useState<number|null>(null);
const handleClick= (star: number) => {
    setRating(star);
    onRate?.(star)
}
  return (
 <div style={{ display: 'flex', gap: 4 }}>
      {Array.from({ length: maxStars }, (_, i) => {
        const starIndex = i + 1;
        const isFilled = hoveredStar !== null
          ? starIndex <= hoveredStar
          : starIndex <= rating;

        return (
          <FaStar
            key={starIndex}
            size={24}
            style={{ cursor: 'pointer' }}
            color={isFilled ? 'orange' : '#ccc'}
            onClick={() => handleClick(starIndex)}
            onMouseLeave={() => setHoveredStar(null)}
          />
        );
      })}
    </div>
  )
}

export default StarRating