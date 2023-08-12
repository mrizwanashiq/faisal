

const FilterReducer = (state, action) =>{
    switch(action.type){
        case "FILTER_PRODUCTS":
            return{
                ...state,
                filterProducts:[{...action.payload}],
                allProduct:[{...action.payload}],
            }
        default: return state
    }

}
export default FilterReducer