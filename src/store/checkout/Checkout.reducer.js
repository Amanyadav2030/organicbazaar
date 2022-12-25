
import {  GET_CHECKOUT_SUCCESS,ADD_CHECKOUT_SUCCESS, GET_CHECKOUT_LOADING, GET_CHECKOUT_ERROR, ADD_CHECKOUT_LOADING, ADD_CHECKOUT_ERROR, UPDATE_CHECKOUT_LOADING, UPDATE_CHECKOUT_ERROR, UPDATE_CHECKOUT_SUCCESS} from "./Checkout.types";
const initialState = {
    final: [],
    loading:false,
    error:false,
}; 

 
export const checkoutReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CHECKOUT_LOADING: {
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case GET_CHECKOUT_ERROR: {
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        case GET_CHECKOUT_SUCCESS: {
            return {
                ...state,
                loading:false,
                error:false,
                final:payload
            }
        }
        case ADD_CHECKOUT_LOADING: {
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case ADD_CHECKOUT_ERROR: {
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        case ADD_CHECKOUT_SUCCESS: {
            // console.log(payload, "inside CART ADD")
            localStorage.setItem('af#@*--afasdadfj',payload._id);
            return {
                ...state,
                loading:false,
                error:false,
                final:[...final,payload]
            }
        }
        case UPDATE_CHECKOUT_LOADING: {
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case UPDATE_CHECKOUT_ERROR: {
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        case UPDATE_CHECKOUT_SUCCESS: {
            // console.log(payload, "inside CART ADD")
            localStorage.removeItem('af#@*--afasdadfj')
            return {
                ...state,
                loading:false,
                error:false,
            }
        }
        default: {
            return state
        }
    }
}