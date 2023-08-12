import { createContext, useContext, useEffect, useReducer } from "react";
import { usePook } from "./Context";
import reducer from "../components/reducer/FilterReducer"



const Raju = createContext()

const initialState ={
    
    filterProducts:[],
    allProducts:[],
}


export const FilterProvider = ({children}) =>{

    const { Products } = usePook()
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() =>{
        dispatch({type: "FILTER_PRODUCTS", payload: Products})
    },[Products])

       return<Raju.Provider value={{...state}}>
         {children}
      </Raju.Provider>
}



export const useFilterContext = ()=>{
    return useContext(Raju)
}