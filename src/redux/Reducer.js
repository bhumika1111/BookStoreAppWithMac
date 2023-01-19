import { ADD_TO_CART } from "./ActionType";

const reducers = (initialState = [],action)=>{
    switch(action){
        case ADD_TO_CART:
            return [...initialState,action.payload]
            
             default:
                 return initialState;


        
    }
}
export default reducers