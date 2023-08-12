import React from 'react'
import { Button } from './component/components/Button'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    
  return (
    
    <div className='container'>
         <div className='grid'>
            <div className='txt'>
                <h3>faisal  shah</h3>
                <p>All orders are shipped within 24 to 48 hours of you placing<br/>
                     the order using DHL eCommerce, USPS or ePacket depending on<br/>
                     your location and fastest available service. Typical delivery<br/>
                      time frame is between</p>
                 <NavLink to="/Cart"> <Button> click here</Button></NavLink>
            </div>
            <div className='pic'>
                
                    <img src="image/hero.jpg" className='sas'/>

            </div>
         </div>
    </div>
  )
}

export default Hero
