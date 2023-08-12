
import axios from "axios";
import { createContext,useContext, useEffect, useReducer } from "react";
import reducer from "../components/reducer/ProductReducer"

const initialState = {
    isLoading: false,
    isError:false,
    Products:[],
    featureProducts:[],
    isSingalLoading:false,
    singalProduct:{},
}

const AppContext = createContext()
const API = 'https://api.pujakaitem.com/api/products'
 
const Faisal = ({children}) =>{
const [state, dispatch] = useReducer(reducer, initialState)

const getapi = async(url) =>{
    dispatch({type:"GET_LOADING"})
    try{
  const res  = await axios.get(url)
  const products =await res.data
  dispatch({type: "GET_API_DATA", payload: products})
  }catch(error){
    dispatch({type:"ERROR_DATA"})
  }
}
//my second api call for singal product
 
const getSingalProduct = async(url) =>{
  dispatch({type:"singal_loading"})
try {
  const res = await axios.get(url)
  const singalProduct = await res.data
  dispatch({type: "singal_data", payload: singalProduct})
} catch (error) {
  dispatch({type: "singal_error"})
  
}

}

    useEffect(() =>{
        getapi(API)
    },[])

    return<AppContext.Provider value={{...state,getSingalProduct}}>
              {children}
          </AppContext.Provider>
}


const usePook = () =>{
    return useContext(AppContext)
}


export {AppContext, Faisal,usePook}

