import React from 'react'
import LeftContent from './Left'
import RightContent from './Right'


const Content = (props) => {
  return (
    <div className='  py-10 px-10 gap-10 flex justify-around h-150 w-full bg-white rounded-b-lg' >
        <LeftContent/>
        <RightContent arr={props.arr}/>
    </div>
  )
}

export default Content