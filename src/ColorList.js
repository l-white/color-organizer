import Color from './Color'

const ColorList = ({ colors = [] }) => {
  if (!ColorList.length) return <div>No colors listed</div>
  return (
    <div style={{ margin: '10px' }}>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  )
}

export default ColorList
