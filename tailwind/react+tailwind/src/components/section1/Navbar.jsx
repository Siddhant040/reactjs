import React from 'react'
import { CornerDownRight } from 'lucide-react'

export const Navbar = () => {
  return (
    <div className='bg-white flex justify-between  py-16 px-20  h-16 w-full rounded-t-lg'>
        <h4 className='bg-black h-10 text-white py-2 px-4 rounded-2xl' >TARGET AUDIENCE</h4>
        <button className=' flex gap-2 bg-gray-500 h-10  text-white py-2 px-4 rounded-2xl'><CornerDownRight/> DIGITAL BANKING PLATFORM </button>

    </div>
  )
}
