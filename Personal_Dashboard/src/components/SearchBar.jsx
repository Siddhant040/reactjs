import React from 'react'
import { Menu } from 'lucide-react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className=' h-15 border-b-2 border-gray-700 flex  items-center bg-linear-to-r from-[#111827] to-[#1f2937]'>
      <div className='  px-5 text-white  '> <Menu /> </div>
       <div className="
       m-15
       border-2 border-gray-800
      flex
      items-center
      gap-3
      bg-[#111827]
      px-4
      py-2
      rounded-4xl
      w-87.5
    ">

      <Search
        size={18}
        className="text-gray-400"
      />

      <input
        type="text"
        placeholder="Search..."
        className="
          bg-transparent
          outline-none
          text-white
          placeholder:text-gray-500
          w-full
        "
      />

    </div>
    </div>
  )
}
