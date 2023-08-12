const ProductReducer = (action, state) =>{

    switch(action.type){
        case "GET_LOADING" :
            return{
                ...state,
                isLoading:true,
            }
        case "GET_API_DATA":
            
                const featureData = action.payload.filter((curElem) =>{
                    return curElem.featured=== true
                })
                  return{
                    ...state,
                    isLoading:false,
                    Products: action.payload,
                    featureProducts: featureData,
                  }
            
        case "ERROR_DATA" :
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
            case "singal_loading" :
                return{
                    ...state,
                    isSingalLoading:true,
                  
                }
                case "singal_data":
                    return{
                        ...state,
                        isSingalLoading:false,
                        singalProduct: action.payload,

                    }
                case  "singal_error":
                    return{
                        ...state,
                        isSingalLoading:false,
                        isError:true,

                    }
        default:
           return state
        
    }

}

export default ProductReducer