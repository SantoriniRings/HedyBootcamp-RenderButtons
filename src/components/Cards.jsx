import React from 'react'

const Cards = (props) => {

    

  return (
    <div>
        <h1>{props.name}</h1>
        <img src={props.img} alt="EvaRobots" />
        <p>{props.pilot}</p>
    </div>
  )
}

export default Cards