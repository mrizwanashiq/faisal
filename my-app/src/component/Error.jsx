import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './components/Button'
import { styled } from 'styled-components'

const Error = () => {
  return (
    <Wrapper>
      <div className='ero'>
        <h2>404</h2>
        <h3>some thing went wrong</h3>
        <NavLink to="/Home">
          <Button className='btn'>go back home</Button>
        </NavLink>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
text-align: center;
  h2{
    font-size: 100px;
    text-align: center;
  }
  h3{
    text-align: center;
  }
  .btn{
    text-align: center;
  }
  
`


export default Error