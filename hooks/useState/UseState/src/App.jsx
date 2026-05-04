import React, { useState } from 'react'

export const App = () => {
   const [count, setCount] = useState("")

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(count)
    setCount("")
   }
  

  return (
    <div>

      <form onSubmit={(handleSubmit)}>
        <h1>Form</h1>
        <input type="text" 
        value={count}
         onChange={(e) => setCount(e.target.value)} 
         placeholder='Enter your name' />
        <input type="email" placeholder='Enter your email' />
       
        <button type='submit'>Submit</button>
      </form>
      {/* <h1>UseState Hook</h1>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count + 1 )}
      >Increment</button>
      <button onClick={()=>{
        if(count > 0){
      setCount(count - 1 )}}}
      >decrement</button>
      <button onClick={()=>setCount(0)}
      >Reset</button> */}
    </div>
  )
}
