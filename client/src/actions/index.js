
const axios = require('axios').default;
export const TEXT_TRANSFORM = "TEXT_TRANSFORM";

export function getTextTransform(textTransform){
    return function(dispatch){
        return axios.get(`http://localhost:3001/iecho?text=${textTransform}`)
        .then((response) => {
            dispatch({
                type: TEXT_TRANSFORM,
                payload: response.data,
            })
        }).catch((response) => {
            dispatch({
                type: TEXT_TRANSFORM,
                payload: response.data,
            })
        })       
    }
}