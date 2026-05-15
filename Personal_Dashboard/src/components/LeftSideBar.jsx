import React from 'react'
import { CircleCheckBig } from 'lucide-react';
 import  { LayoutDashboard } from 'lucide-react';
 import { Logs } from 'lucide-react'
 import { StickyNotes } from 'lucide-react';
 import { Calendar } from 'lucide-react';
 import { Settings } from 'lucide-react';
 import { LogOut } from 'lucide-react';
 import { User } from 'lucide-react';

export default function LeftSideBar() {

  const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: LayoutDashboard
  },
  {
    id: 2,
    title: "Tasks",
    icon: Logs
  },
  {
    id: 3,
    title: "Notes",
    icon: StickyNotes
  },
  {
    id: 4,
    title: "Calendar",
    icon: Calendar
  },
  {
    id: 5,
    title: "Settings",
    icon: Settings
  }
]
const bottomItems = [
  {
    id: 6,
    title: "Logout",
    icon: LogOut
  },
  {
    id: 7,
    title: "Profile",
    icon: User
  }
]

  return (
    <div className='bg-black flex flex-col h-full border-r-2 border-gray-800 overflow-hidden   w-1/6'>
        <div className=' text-white flex justify-center items-center h-15 text-2xl gap-2'> <CircleCheckBig />  MyTask</div>
        <div className=' h-120 text-xl text-white font-semibold flex flex-col items-start mx-5 gap-6 py-8'>
         {menuItems.map((item)=>{
          const Icon = item.icon
          return(
          <button key={item.id} className="  text-left flex  gap-2 justify-center px-4 py-2 rounded-lg hover:bg-gray-800 active:bg-gray-800 transition"> <Icon />{item.title}</button>
         )})}
        </div>
        <div className='  flex-1 text-xl text-white font-semibold flex flex-col items-start mx-5 gap-6 py-8'>
          {bottomItems.map((item)=>{
            const Icon = item.icon
            return(
            <button key={item.id} className="  text-left flex  gap-2 justify-center px-4 py-2 rounded-lg hover:bg-gray-800 active:bg-gray-800 transition"> <Icon />{item.title}</button>
           )})}
          
        </div>
        </div>
  )
}
