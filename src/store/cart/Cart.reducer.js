
import {  GET_CART_SUCCESS,ADD_CART_SUCCESS, GET_CART_LOADING, GET_CART_ERROR, ADD_CART_LOADING, ADD_CART_ERROR, DELETE_CART_LOADING, DELETE_CART_ERROR, DELETE_CART_SUCCESS} from "./Cart.types";
const initialState = {
    data: [],
    loading:false,
    error:false,
}; 

 
export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CART_LOADING: {
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case GET_CART_ERROR: {
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        case GET_CART_SUCCESS: {
            return {
                ...state,
                loading:false,
                error:false,
                data:payload
            }
        }
        case ADD_CART_LOADING: {
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case ADD_CART_ERROR: {
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        case ADD_CART_SUCCESS: {
            // console.log(payload, "inside CART ADD")
            return {
                ...state,
                loading:false,
                error:false
            }
        }
        case DELETE_CART_LOADING: {
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case DELETE_CART_ERROR: {
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        case DELETE_CART_SUCCESS: {
            return {
                ...state,
                loading:false,
                error:false
            }
        }

        default: {
            return state
        }
    }
}