import { useState } from 'react';
import './App.css'

function App() {

  const [counter,setCounter] = useState(0)
  
  //let counter = 10

  const addValue = () => {
   //counter = counter + 1;
   //console.log("clicked",counter)
   if(counter == 20){
    alert("You have reached the maximum limit")
   }
   else{
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
   }
  }

  const removeValue = () => {
    //console.log("clicked",counter)
    if(counter == 0){
      alert("Counter cannot be less than 0")
    }
    else{
      setCounter(counter-1) 
    }
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter value : {counter}</h2>
    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br/>
    <hr/>
    <button
    onClick={removeValue}
    >Remove Value {counter}</button>
    <p>{counter}</p>
    </>
  )
}

export default App
