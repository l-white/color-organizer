import Color from './Color'

const ColorList = ({ colors = [], onRemoveColor = (f) => f }) => {
  if (!ColorList.length) return <div>No colors listed</div>
  return (
    <div style={{ margin: '10px' }}>
      {colors.map((color) => (
        <Color key={color.id} {...color} onRemove={onRemoveColor} />
      ))}
    </div>
  )
}

export default ColorList
