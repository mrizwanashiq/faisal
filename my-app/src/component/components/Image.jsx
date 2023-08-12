import React, { useState } from 'react'
import { styled } from 'styled-components'

const Image = ({imgs =[{ url :""}]}) => {
   const [mainImage, setmainImage] = useState(imgs[0])
    
  return (
    <Wrapper>
        {
            imgs.map((curElem, index) =>{
             return(   
                    <img src={curElem.url}
                      alt={curElem.filename}
                      key={index} onClick={() => setmainImage(curElem)}/>
                
                )
            })
        }
        <div className='screen'>
          {/* <img src={imgs[0].url} alt={imgs[0].filename}/> */}
          <img src={mainImage.url} alt={mainImage.filename}/>
                  </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
img{
    width: 20%;
}
`

export default Image