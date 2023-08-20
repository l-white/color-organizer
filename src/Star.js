import { FaStar } from 'react-icons/fa'
const Star = ({ selected, onSelect = (f) => f }) => (
  <FaStar color={selected ? 'orange' : 'grey'} onClick={onSelect} />
)

export default Star
