import axios from "axios";
import { GET_ORDER_ERROR, GET_ORDER_LOADING, GET_ORDER_SUCCESS } from "./Order.types";


export const getOrderAPI = (token) => async (dispatch) => {
    dispatch({type:GET_ORDER_LOADING})
    try { 
        const res = await axios.get(`${import.meta.env.VITE_API_KEY}/sold`,{
            headers:{
                authorization:token
            }
        })
        dispatch({ type: GET_ORDER_SUCCESS,payload:res.data });
    } catch (error) {
        dispatch({type:GET_ORDER_ERROR})

    }
}