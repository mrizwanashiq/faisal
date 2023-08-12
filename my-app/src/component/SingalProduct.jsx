import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePook } from './usecontext/Context'
import PageNavigation from './PageNavigation';
import { styled } from 'styled-components';
import Image from './components/Image';
import PriceFormat from '../helper/PriceFormat';
import Star from '../Star';
import AddToCart from './AddToCart';



const API = 'https://api.pujakaitem.com/api/products';

const SingalProduct = () => {

  const {getSingalProduct, isSingalLoading,  singalProduct} = usePook();
  const {id} = useParams();
  const {id: alias, name, price,category,shipping,stock,reviews,stars,image,company,description,colors} = singalProduct  || {}; 


  useEffect(()=>{
  
    getSingalProduct(`${API}?id=${id}`)

  },[])
  if(isSingalLoading){
    return<div>.....Loading</div>
  }
  return (<Wrapper>
    <div><PageNavigation title={name}/></div>
    <div className='submain'>
         <div className='left'>
          <Image imgs={image}/>
            <h1>image</h1>
         </div>
         <div className='right'>
          {name}
          {price}
          <p className='mrp'>MRP:<del><PriceFormat price={price+ 250000} /></del></p>
          <Star stars={stars}/>
          {/* <p>{stars}:start</p> */}
          <p>{reviews}:revies</p>
          <p>{description}</p>
          <span>{stock > 0 ? "in stock" : "not available"}</span>
          <p>brand:{name}</p>
          <p>ID:{id}</p>
          <hr/>
          {stock > 0 && <AddToCart PProduct={singalProduct} />}

         </div>
      </div></Wrapper>
  )
}
const  Wrapper = styled.section`
  .submain{
    display: inline;
    width: 80%;
    margin: auto;
  }
`

export default SingalProduct