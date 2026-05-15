import React, { Activity } from 'react'
import { Calendar } from 'react-calendar'
import UpcomingTab from './UpcomingTab'
import ActivityTab from './ActivityTab'

export default function RightSideBar() {
  return (
     <div className="
      w-[320px]
      min-w-[320px]
     bg-linear-to-b from-[#020617] to-[#111827]
      p-3
      flex
      flex-col
      gap-3
    ">
      <div className="bg-gray-600 rounded-3xl  p-4"><Calendar/></div>
      <div className='bg-gray-600 rounded-3xl text-xl text-white p-4 h-45'>
        <UpcomingTab/>

      </div>
      <div className='bg-gray-600 rounded-3xl text-xl text-white p-4 flex-1'>
        <ActivityTab/>
      </div>
    </div>
  )
}
