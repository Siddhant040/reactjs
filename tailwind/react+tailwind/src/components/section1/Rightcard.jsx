import React from 'react'
import { ArrowRight } from 'lucide-react'

export const Rightcard = (props) => {
    return (
        <div className='relative shrink-0 overflow-hidden h-full w-60 rounded-4xl '>
            <img className=' object-cover h-full w-full rounded-4xl' src={props.image} alt='Rightcard' />
            <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between  '>
                <h2 className=' py-7 px-7 bg-white my-7 mx-7 h-1 w-1 flex justify-center items-center text-2xl font-bold rounded-full'>{props.id}</h2>
                <div>
                    <p className='text-white text-wrap  text-bold px-7 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem tempora veritatis assumenda quia modi!</p>
                </div>
                <div className="flex justify-end gap-2 mb-7 mr-4">
                    <button className="px-7 py-2 rounded-full bg-blue-500 text-white font-bold">
                        {props.button}
                    </button>

                    <button className="bg-blue-500 rounded-full text-white p-2">
                        <ArrowRight />
                    </button>
                </div>

            </div>
        </div>
    )
}
