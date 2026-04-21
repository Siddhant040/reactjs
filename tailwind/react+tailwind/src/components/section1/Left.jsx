import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Left = () => {
  return (
    <div className=' flex-col justify-between h-full  w-1/3  '>
      <div className='py-10'>
        <h3 className='text-5xl font-bold leading-[1.1]'>Prospective <br/> <span>Customer</span>  <br/>Segementation</h3>
        <h5 className='text-gray-600 text-medium py-10'>Depending on customer <br/>satisfaction and access<br/> to banking products,potential<br/>target audience can be divided into three groups</h5>
      </div>
      <div><ArrowUpRight size={70} /></div>
    </div>
  )
}

export default Left