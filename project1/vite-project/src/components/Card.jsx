import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <img src="https://i.pinimg.com/736x/12/1b/87/121b871088f752a3ea6fd1324f1c9c2b.jpg"/>
        <h1>{props.user},{props.age}</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, facere.</h2>
        <button>View Profile</button>
    </div>
  )
}

export default Card