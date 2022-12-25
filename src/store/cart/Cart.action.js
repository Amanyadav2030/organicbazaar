import axios from "axios";
import { ADD_CART_ERROR, ADD_CART_LOADING, ADD_CART_SUCCESS, DELETE_CART_ERROR, DELETE_CART_LOADING, DELETE_CART_SUCCESS, GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS } from "./Cart.types";
export const getCartAPI = (token) => async (dispatch) => {
    dispatch({ type: GET_CART_LOADING });
    try { 
      const res = await axios.get(`${import.meta.env.VITE_API_KEY}/cart`,{
        headers: {
            authorization: token
        }
    })
      // console.log(res,'inside cart get action')
      dispatch({ type: GET_CART_SUCCESS, payload: res.data })
    } catch (er) {
      dispatch({ type: GET_CART_ERROR })
    }
  } 
  export const addCartAPI = (token,data) => async (dispatch) => {
    dispatch({ type: ADD_CART_LOADING });
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_KEY}/cart`,data, {
        headers: {
            authorization: token
        }
    })
      // console.log(res,'inside cart post action',data)
      dispatch(getCartAPI(token));
      dispatch({ type: ADD_CART_SUCCESS, payload: res.data })
    } catch (er) {
      dispatch({ type: ADD_CART_ERROR })
    }
   
  }
  
  export const deleteCartAPI = (token,id) => async (dispatch) => {
    dispatch({ type: DELETE_CART_LOADING });
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_KEY}/cart/${id}`, {
        headers: {
            authorization: token
        }
    })
      console.log(res,'inside cart delete action',res.data)
      dispatch(getCartAPI(token));
      dispatch({ type: DELETE_CART_SUCCESS })
    } catch (er) {
      dispatch({ type: DELETE_CART_ERROR })
    }
   
  }
  