import React from 'react'
import { Timer } from 'lucide-react'

export default function UpcomingTab() {
  return (
    <div className="
  bg-gray-600
  rounded-3xl
  p-2
  h-full
  flex flex-col
">

  {/* title */}
  <span className="text-2xl text-white mb-4">
    Upcoming Events
  </span>

  {/* scrollable events */}
  <div className="
    flex-1
    overflow-y-auto
    
    space-y-3
  ">

    {/* event */}
    <div className="
      w-full
      bg-gray-500
      rounded-2xl
      p-3
      flex items-center gap-2
    ">
      <span> < Timer size={20} /></span>
      <span className='text-xs'>Design Dashboard U</span>
    </div>

    

  </div>

</div>
  )
}
