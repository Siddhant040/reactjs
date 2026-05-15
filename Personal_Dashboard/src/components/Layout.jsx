import React from 'react'

import LeftSideBar from './LeftSideBar'
import DashBoardContent from './DashBoardContent'



function Layout() {
  return (
    <div className='flex  w-full flex-col h-full bg-linear-to-b from-[#020617] to-[#111827] '>
      <div className=" bg-linear-to-b from-[#020617] to-[#111827] h-10 w-full flex items-center gap-2 px-4 border-b-2 border-gray-700 ">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
     



      <div className='flex flex-1  justify-between '>
        <LeftSideBar />
        
        

        <DashBoardContent />
        
      </div>
    </div>

  )
}

export default Layout