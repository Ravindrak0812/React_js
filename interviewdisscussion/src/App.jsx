import { useState } from 'react'

import './App.css'

function App() {
  const [value, setvalue] = useState(1)
  // const [multipliedvalue, setMultipliedvalue] = useState(1)

  let multipliedvalue = value * 5;

  const multiplybyfive = () => {
    //setMultipliedvalue(value * 5)
    setvalue(value+1)
  }

  return (
    <>
     <h1>Main Value: 5 * {value}</h1>
     <button
     
     onClick={multiplybyfive}

     >Click to Multiply by 5</button>
     <h2>Multiplied Value: {multipliedvalue}</h2>
    </>
  )
}

export default App
