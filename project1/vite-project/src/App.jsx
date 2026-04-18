import React from 'react'
import Card from './components/Card'
import Nav from './components/Nav'


 const App = () => {
  return (
    <div className='parent'>
      <Card  user="Dhruv" age ={20}/>
      <Card user="Aman" />
      <Card user="Aditya"/>
      
     </div>
  )
}

export default App
