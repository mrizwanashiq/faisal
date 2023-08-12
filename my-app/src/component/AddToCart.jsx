import React, { useState } from 'react'
import { styled } from 'styled-components';
import {FaCheck} from"react-icons/fa"
import Increment from '../Increment';
import { NavLink } from 'react-router-dom';


const AddToCart = ({PProduct}) => {

  const {id, colors, stock} = PProduct;
  const [color, setColor] = useState()

  const [amount, setAmount] = useState(1)


  const setDecrease = () =>{
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }
  const setIncrease = () =>{
    amount < stock ? setAmount(amount + 1) : setAmount(stock)
  }
   
  return (
    <Wrapper>  
       color:
       {
        colors.map((curColor, index) =>{
          return <button key={index} style={{backgroundColor: curColor}}
          className={color === curColor ? "color active" : "color"}
          onClick={() =>setColor(curColor)}
          >
            {curColor }{color === curColor ? <FaCheck className='col'/> : null} </button>         
        })
       }
       
      <Increment
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}/>
        <NavLink to="/cart">
          <button>Add To Cart</button>
        </NavLink>
    </Wrapper>
 
  )
}
const Wrapper = styled.section`
.col{
  color: #383838;
}

`

export default AddToCart