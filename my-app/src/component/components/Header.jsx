import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components';
import Raju from './Raju';


const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/Home">
            <img src='image/Logo.png' className='immg'/>
  
        </NavLink>
        <Raju/>
    </MainHeader>
  )
}
const MainHeader = styled.header`
   display: flex ;
   background-color: #ffb26a;

.immg{
  margin: 20px;
}
@media (max-width: ${({theme}) => theme.media.mobile})  {
      background-color: #696d6d;
      width: 100vh;
}
`

export default Header