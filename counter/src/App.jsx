import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [inputVisible, setInputVisible] = useState(true);
  return (
    <>
    <div>
      <button onClick={()=>{setInputVisible(!inputVisible)}}>Toggle Visibility</button>

      {
        inputVisible &&(<input type="number" value={inputValue} onChange={(event)=>{
          console.log(event.target.value);
          setInputValue(event.target.value);
        }}/> )
      }
      
      <button onClick={()=>{setCount(parseInt(inputValue));setInputValue(0) }}>Set Count</button>
      <button 
      style={{backgroundColor:"cyan"}}
      onClick={()=>{setCount(count+1);}}
      >count: {count}</button>
    </div>
      
    </>
  )
}

export default App
