import React from 'react'
import TaskContent from './TaskContent'
import RightSideBar from './RightSideBar'

export default function ContentArea() {
  return (
    <div className=' flex flex-1 overflow-hidden '>
      <TaskContent/>
      <RightSideBar/>
    </div>
  )
}
