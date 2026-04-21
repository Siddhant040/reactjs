import React from 'react'
import { Navbar } from './Navbar'
import Content from './Content'

export const Section1 = (props) => {
  return (
    <div className='  justify-center h-auto px-30'>
        <Navbar />
        <Content arr={props.arr}/>
    </div>
  )
}
