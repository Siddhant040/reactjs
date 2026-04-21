import React from 'react'
import { Rightcard } from './Rightcard'

 const Right = (props) => {
  console.log(props.arr)
  

  return (
    <div id='right' className=' flex shrink-0  overflow-x-auto flex-nowrap gap-7 py-8 px-8 w-2/3  '>
     {props.arr.map((item, id) => <Rightcard  id={item.id} image={item.image} button={item.button } />)}
      
    </div>
      
  )
}

export default Right


   
