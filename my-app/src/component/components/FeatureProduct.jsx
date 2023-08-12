import { styled } from "styled-components"
import Products from "../Products"
import { usePook } from "../usecontext/Context"

const FeatureProduct = () => {
const {isLoading, featureProducts} = usePook() 

if(isLoading){
    return<div>....loading</div>
  
}


  return (
    <Wrapper><>  <div className="flx">
    {
       featureProducts && featureProducts.map((curElem, id) =>{
            return <div key={id}> <Products key={curElem.id}{...curElem}/></div>
        })
    }
  
    </div>
    </>
    </Wrapper>  
  
  
  )
}
const Wrapper = styled.section`
  
  .flx{
    display:flex;
    margin: auto;
  }
`

export default FeatureProduct