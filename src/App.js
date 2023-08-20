import { useState } from 'react'
import colorData from './color-data.json'
import ColorList from './ColorList'
import './App.css'

const App = () => {
  const [colors] = useState(colorData)
  return <ColorList colors={colors} />
}

export default App
