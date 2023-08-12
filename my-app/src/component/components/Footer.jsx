import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
        <div className='footer'>
              <div className='hek'>
                <h2>footer</h2>
              </div>
              <div className='hek'>
              <h2>footer</h2>
             </div>
             <div className='hek'>
             <h2>footer</h2>
             </div>
             <div className='hek'>
             <h2>footer</h2>
             </div>
             <div className='hek'>
             <h2>footer</h2>
             </div>

        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   .footer{ background-color: #131346;
    color: #d6cfc7;
    display: flex;
    text-align: center;
    
}
.hek{
    width: 20%;
   margin-top: 30px;
}
`

export default Footer