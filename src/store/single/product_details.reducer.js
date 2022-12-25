import {GET_SINGLE_SUCCESS, GET_SINGLE_LOADING, GET_SINGLE_ERROR, GET_SINGLE_CART_LOADING, GET_SINGLE_CART_ERROR, GET_SINGLE_CART_SUCCESS, ADD_SINGLE_LOADING, ADD_SINGLE_ERROR, ADD_SINGLE_SUCCESS} from "./product_details.types"

const initialState = {
    error:false,
    loading2:false,
    loading:false,
    singleData: {},
    data:[]
};


export const singleReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SINGLE_LOADING: {
            return {
                ...state,
                loading2:true,
                error:false
            }
        }
        case GET_SINGLE_ERROR: {
            return {
                ...state,
                error:true,
                loading2:false
            }
        }
        case GET_SINGLE_SUCCESS: {
            return {
                ...state,
                loading2:false,
                error:false,
                singleData:payload,
            }
        }
        case GET_SINGLE_CART_LOADING: {
            return {
                ...state,
                loading:true,
                error:false
            }
        }
        case GET_SINGLE_CART_ERROR: {
            return {
                ...state,
                error:true,
                loading:false
            }
        }
        case GET_SINGLE_CART_SUCCESS: {
            return {
                ...state,
                loading:false,
                error:false,
                data:payload,
            }
        }
        case ADD_SINGLE_LOADING: {
            return {
                ...state,
                loading:true,
                error:false
            }
        }
        case ADD_SINGLE_SUCCESS: {
            return {
                ...state,
                error:false,
                loading:false
            }
        }
        case ADD_SINGLE_ERROR: {
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        default: {
            return state
        }
    }
}