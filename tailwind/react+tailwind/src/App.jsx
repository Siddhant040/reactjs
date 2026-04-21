import React from 'react'
import { Section1 } from './components/section1/Section1'
import Section2 from './components/section2/Section2'

export const App = () => {
  let arr = [
    {id:1,
     image:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
     
     button:"Satisfied", 
    },
     {id:2,
     image:'https://plus.unsplash.com/premium_photo-1661580918956-721f7c9116ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc1fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
     
     button:'Underbanked', 
    },
     {id:3,
     image:'https://plus.unsplash.com/premium_photo-1683121523671-9617aba661d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc5fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
     
     button:'Underserved', 
    },
    {id:1,
     image:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
     
     button:"Satisfied", 
    },
     {id:2,
     image:'https://plus.unsplash.com/premium_photo-1661580918956-721f7c9116ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc1fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
     
     button:'Underbanked', 
    },
     {id:3,
     image:'https://plus.unsplash.com/premium_photo-1683121523671-9617aba661d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc5fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
     
     button:'Underserved', 
    },
    {id:1,
     image:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
     
     button:"Satisfied", 
    },
     {id:2,
     image:'https://plus.unsplash.com/premium_photo-1661580918956-721f7c9116ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc1fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
     
     button:'Underbanked', 
    },
     {id:3,
     image:'https://plus.unsplash.com/premium_photo-1683121523671-9617aba661d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc5fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
     
     button:'Underserved', 
    }
  ]
  return (
    <div className='py-10 px-10 bg-gray-700'>
      
      <Section1  arr={arr}/>
      <Section2 />
    </div>
  )
}

   
 
