import React from 'react'
import { useFilterContext } from './component/usecontext/FilterContext'
import Products from './component/Products'







const Store = () => {
const {filterProducts} = useFilterContext()
console.log(filterProducts)

  return (
    <>
			{filterProducts.length > 0 &&
				Object.keys(filterProducts[0]).map((key) => {
					return (
						<Products
							key={filterProducts[0][key].id}
							{...filterProducts[0][key]}
						/>
					);
				})}
  </>
  )
}



export default Store
