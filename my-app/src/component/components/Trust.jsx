import React from 'react'
import { styled } from 'styled-components'
import {BsMinecart} from  'react-icons/bs'

const Trust = () => {
  return (
    <Wrapper>
    <>
    <div className='trust'>
         <div className='iner'>
         <BsMinecart/>
         </div>
         <div className='iner'>
         <BsMinecart/>
             </div>
             <div className='iner'>
             <BsMinecart/>
             </div>
             <div className='iner'>
             <BsMinecart/>
             </div>
             <div className='iner'>
             <BsMinecart/>
             </div>
    </div>
    </>
    </Wrapper>
  )
}
const Wrapper = styled.section`
      .trust{
        background-color: #4d4e4e;
        width: 100%;
        display: flex;
        text-align: center;

      }
      .iner{
        width: 20%;
        font-size: 50px;
        margin-top: 50px;
        color: aqua;
      }
`

export default Trust