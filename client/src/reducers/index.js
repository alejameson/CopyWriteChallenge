import { TEXT_TRANSFORM } from "../actions";

const initialState = {
    text: '',
}

function rootReducer (state = initialState, action){
    switch(action.type){

        case TEXT_TRANSFORM:
            return {
                ...state,
                text: action.payload
            }
        
        default:
            return state;
    }
}

export default rootReducer;