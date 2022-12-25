
import {  GET_ORDER_SUCCESS,ADD_ORDER_SUCCESS} from "./Order.types";
const initialState = {
    data: []
};


export const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ORDER_SUCCESS: {
            // console.log("inside CART REDUCER GET")
            return {
                ...state
            }
        }
        case ADD_ORDER_SUCCESS: {
            // console.log(payload, "inside CART ADD")
            return {
                ...state,
                data: [...state.data,payload]
            }
        }

        default: {
            return state
        }
    }
}