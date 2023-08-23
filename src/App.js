import { useState } from 'react'
import colorData from './color-data.json'
import ColorList from './ColorList'
import AddColorForm from './AddColorForm'
import { v4 } from 'uuid'
import './App.css'

const App = () => {
  const [colors, setColors] = useState(colorData)
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            },
          ]
          setColors(newColors)
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id)
          setColors(newColors)
        }}
      />
    </>
  )
}

export default App
