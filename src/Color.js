import StarRating from './StarRating'
import { FaTrash } from 'react-icons/fa'

const Color = ({ id, title, color, rating, onRemove = (f) => f }) => {
  return (
    <section>
      <h1>{title}</h1>
      <button style={{ marginBottom: '2px' }} onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} />
    </section>
  )
}

export default Color
