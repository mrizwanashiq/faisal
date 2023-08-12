import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"

const Increment = ({amount, setIncrease, setDecrease}) => {
  return (
    <div>
        <button onClick={() =>setIncrease()}><AiOutlinePlus/></button>
        {amount}
        <button onClick={() =>setDecrease()}><AiOutlineMinus/></button>
    </div>
  )
}

export default Increment