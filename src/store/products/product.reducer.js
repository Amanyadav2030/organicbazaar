import {ADD_PRODUCT_ERROR, ADD_PRODUCT_LOADING, ADD_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS} from "./product.types"

const initialState = {
    loading: false,
    error: false,
    data: [],
};


export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) { 
        case GET_PRODUCT_LOADING: {
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case GET_PRODUCT_ERROR: {
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        case GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                error:false,
                loading:false,
                data: payload
            }
        }
        case ADD_PRODUCT_LOADING: {
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case ADD_PRODUCT_ERROR: {
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        case ADD_PRODUCT_SUCCESS: {
            return {
                ...state,
                error:false,
                loading:false,
                data: [...state.data,payload]
            }
        }

        default: {
            return state
        }
    }
}