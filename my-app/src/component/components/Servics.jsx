import React from 'react'
import {BsMinecart} from  'react-icons/bs'
import { styled } from 'styled-components'

const Servics = () => {
  return (
    <Wrapper>
    <>
      <div className='servics'>
          
          <div className='one'>
          <BsMinecart/>

          </div>
          <div className='two'>
          <BsMinecart/>
          </div>
          <div className='three'>
          <BsMinecart/>
          </div>
        </div>   
    </>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.servics{
    display: flex;
    background-color: #ffffff;
    width: 100%;
    margin-top: 50px;
    color: purple;
}
.one{
    text-align: center;
    width: 33%;
    margin: 50px;
    font-size: 30px;

}
.two{
    text-align: center;
    width: 33%;
    margin: 50px;
    font-size: 30px;
}
.three{
    text-align: center;
    width: 33%;
    margin: 50px;
    font-size: 30px;
}
`

export default Servics