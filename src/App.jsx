import { useEffect, useState } from 'react'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './QuoteBox'

function App() {
  const [quote, setQuote] = useState({})
  const [rgb, setRgb] = useState('')
  
  function generatePosition() {
    let min = Math.ceil(0);
    let max = Math.floor(quotes.length -1);
    const position = Math.floor(Math.random() * (max - min) + min);

    let minHex = Math.ceil(0);
    let maxHex = Math.floor(255);
    const r = Math.floor(Math.random() * (maxHex - minHex) + minHex);
    const g = Math.floor(Math.random() * (maxHex - minHex) + minHex);
    const b =Math.floor(Math.random() * (maxHex - minHex) + minHex);

    return {
      position,
      r,
      g,
      b
    }
  }

  const nextPhrase = () => {
    const { position, r, g, b } = generatePosition()
    console.log(position)
    const data = quotes[position]
    setQuote(data)
    setRgb(`rgb(${r}, ${g}, ${b})`)
  }
  
  useEffect(() => {
      nextPhrase()
  }, [])

  return (
    <div className="App" style={{backgroundColor: rgb}}>
      <QuoteBox quote={quote} nextPhrase={nextPhrase} rgb={rgb}/>
    </div>
  )
}

export default App
