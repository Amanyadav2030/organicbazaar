
import {  GET_ORDER_SUCCESS, GET_ORDER_LOADING, GET_ORDER_ERROR} from "./Order.types";
const initialState = {
    loadingO:false,
    error:false,
    data: []
};


export const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ORDER_LOADING: {
            return {
                ...state,
                loadingO:true
            }
        }
        case GET_ORDER_ERROR: {
            return {
                ...state,
                loadingO:false,
                error:true
            }
        }
        case GET_ORDER_SUCCESS: {
            // console.log("inside CART REDUCER GET")
            return {
                ...state,
                loadingO:false,
                error:false,
                data:payload
            }
        }
      

        default: {
            return state
        }
    }
}