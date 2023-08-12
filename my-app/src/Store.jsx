import React from 'react'
import { useFilterContext } from './component/usecontext/FilterContext'
import Products from './component/Products'







const Store = () => {
const {filterProducts} = useFilterContext()
console.log(filterProducts)

  return (
    <>
  {
    filterProducts.map((curElem) =>{
       return<Products key={curElem.id}{...curElem}/>
    })
  }
  </>
  )
}



export default Store