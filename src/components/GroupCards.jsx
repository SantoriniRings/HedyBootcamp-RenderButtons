import React from 'react'
import Cards from "./Cards"
import "../styles/GroupCards.css"
import eva1 from "../img/eva01.png"
import eva2 from "../img/eva02.png"
import eva5 from "../img/eva05.png"
import eva6 from "../img/eva06.png"

const GroupCards = () => {
  return (
    <div className='container'>
        <div className='cards'><Cards name="Eva 01" img={eva1} pilot="Shinji Ikari" /></div>
        <div className='cards'><Cards name="Eva 02" img={eva2} pilot="Asuka Langley Shikinami" /></div>
        <div className='cards'> <Cards name="Eva 06" img={eva6} pilot="Kaworu Nagisa " /></div>
        <div className='cards'><Cards name="Eva 05" img={eva5} pilot="Mari Ilustre Makinami" /></div>
    </div>
  )
}

export default GroupCards