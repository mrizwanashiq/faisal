import React, { useState } from 'react'
import {BsMinecart} from  'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import {CgMenu, CgClose} from 'react-icons/cg'


const Raju = () => {
    const [menu, setMenu] = useState()
  return (
    
<Main>
    <div className={menu ? "main active" : "main"}>
        <ul className='List'>
            <li><NavLink to="/Home" className='navbar' onClick={()=> setMenu(false)}>Home</NavLink></li>
            <li><NavLink to="/About" className='navbar' onClick={()=> setMenu(false)}>About</NavLink></li>
            <li><NavLink to="/Store" className='navbar' onClick={()=> setMenu(false)}>Store</NavLink></li>
            <li><NavLink to="/Contact" className='navbar' onClick={()=> setMenu(false)}>Contact</NavLink></li>
            <li> <NavLink to="/Cart" className='navbar' onClick={()=> setMenu(false)}>  <BsMinecart/><sup>10</sup></NavLink></li>
        </ul>
        <div className='mobile-nav'>
        <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={()=> setMenu(true)}/>
        <CgClose name="close-outline" className="mobile-nav-icon close-outline" onClick={()=> setMenu(false)}/>
     

        </div>
       
    </div>
    </Main>

  )
}
const Main = styled.section`


      .main{
        display: flex;
    
      }
    .List{
      display: flex;
        list-style-type: none;

     
    }
    .List  li{
        padding: 20px;
        margin-left: 100px;
        
     
        
    }
    ul li{
        
        text-decoration: none; 
        color: azure;
    }
    .List li sup{
       color: aqua;
       font-size: 18px;
    }
    .navbar{
        color: #ffffff;
        text-decoration: none;
    }
    .mobile-nav{
        margin-top: 43px;
        color: #ffffff;
        display: none;
        cursor: pointer;
    }
    .mobile-nav-icon[name="close-outline"]{
        display: none;
    }
    .close-outline{
        display: none;
    };
    @media (max-width: ${({theme}) => theme.media.mobile}) {
        .mobile-nav{
            display: inline-block;
            z-index: 99999;
            cursor: pointer;
        }
        .mobile-nav-icon{
            font-size: 1.2rem;
        }
     
        .active .mobile-nav-icon {
        display: none;
        font-size: 1.2rem;
        position: absolute;
        top: 10%;
        right: 10%;
        color: black;
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .List{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #7a7a7a;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%); 
         /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active .List {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
    }
 
`
export default Raju