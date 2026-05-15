import React from 'react'

import SearchBar from './SearchBar'
import ContentArea from './ContentArea'



export default function Content() {
  return (
    <div className="flex-1 flex flex-col  bg-[#0f172a]">

      <div className=''>
        <SearchBar />
      </div>
      <div className=' h-full  flex '>
        <ContentArea/>
      </div>

     

    </div>
  )
}
