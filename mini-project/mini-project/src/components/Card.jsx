import React from 'react'
import { Bookmark } from 'lucide-react'

 const Card = (props) => {
    // console.log(props.company)
  return (
    <div className='card'>
        <div className='Top'>
            <img src={props.logo} alt='amazon'/>
            <button>Save <Bookmark size={18} /></button>
        </div>
        <div className='Middle'>
            <h3>{props.company} <span>{props.time}</span></h3>
            <h2>{props.position}</h2>
            <div className='tags'>
                <h4>{props.tag1}</h4>
                <h4>{props.tag2}</h4>
            </div>
        </div>
        <div className='Bottom'>
          <div className='left'>
            <h4 >{props.pay}</h4>
            <h5>{props.location}</h5>  
          </div>
          <div className='right'>
            <button>Apply Now</button>
          </div>  
        </div>

    </div>
  )
}

export default Card
