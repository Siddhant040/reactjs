import React from 'react'
import TaskCard from './TaskCard'
import Tasklist from './Tasklist'
import {
  CheckCircle,
  Clock3,
  ListTodo,
  Loader
} from "lucide-react"


export default function TaskContent() {
  const statsData = [

  {
    id: 1,
    title: "Total Tasks",
    value: 24,
    icon: ListTodo,
    color: "bg-blue-500"
  },

  {
    id: 2,
    title: "Completed",
    value: 16,
    icon: CheckCircle,
    color: "bg-green-500"
  },

  {
    id: 3,
    title: "Pending",
    value: 8,
    icon: Clock3,
    color: "bg-yellow-500"
  },

  {
    id: 4,
    title: "In Progress",
    value: "66%",
    icon: Loader,
    color: "bg-purple-500"
  }

]
  
  return (
    <div className=' bg-linear-to-br from-[#07122b] via-[#0b1730] to-[#0d1f1a] flex-1 '>
      <div className='p-5 flex flex-col '>
        <h1 className='  text-3xl text-white font-semibold'>DashBoard</h1>
        <h3 className=' mt-2  text-white font-semibold'>Hi,Shanu</h3>
        <p className=' text-xs text-gray-400'>Welcome to your dashboard</p>

      </div>
      <div className='flex  gap-5 p-5 overflow-hidden'>
        {statsData.map((item)=>{
          return <TaskCard key = {item.id} title={item.title} value={item.value} icon={item.icon} color={item.color}   />
        })}
       
        
        </div>
        <div className='m-7 h-95 rounded-3xl  bg-gray-800 flex-1  '>
          <Tasklist/>
        </div>
    </div>
  )
}
