import axios from "axios";
import { getCartAPI } from "../cart/Cart.action";
import {  ADD_SINGLE_ERROR, ADD_SINGLE_LOADING, ADD_SINGLE_SUCCESS, GET_SINGLE_CART_ERROR, GET_SINGLE_CART_LOADING, GET_SINGLE_CART_SUCCESS, GET_SINGLE_ERROR, GET_SINGLE_LOADING, GET_SINGLE_SUCCESS } from "./product_details.types";

export const getSingleAPI = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_LOADING });
  try { 
    const res = await axios.get(`${import.meta.env.VITE_API_KEY}/product/${id}`);
    // console.log(res.data,'inside single product action')
    dispatch({ type: GET_SINGLE_SUCCESS, payload: res.data })
  } catch (er) {
    dispatch({ type: GET_SINGLE_ERROR })
  }
}
export const getSingleCartAPI = (token,id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_CART_LOADING });
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_KEY}/cart/${id}`, {
      headers: {
          authorization: token
      }
  })
    // console.log(res.data,'inside  get single cart  action')
    dispatch({ type: GET_SINGLE_CART_SUCCESS, payload: res.data })
    dispatch(getCartAPI(token))
  } catch (er) {
    dispatch({ type: GET_SINGLE_CART_ERROR })
  }
}
export const addSingleCartAPI = (token,data) => async (dispatch) => {
  dispatch({ type: ADD_SINGLE_LOADING });
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_KEY}/cart`,data, {
      headers: {
          authorization: token
      }
  })
    console.log('inside single cart post action--',res.data)
    dispatch(getSingleCartAPI(token,data.productId));
    dispatch({ type: ADD_SINGLE_SUCCESS})
    dispatch(getCartAPI(token))
  } catch (er) {
    dispatch({ type: ADD_SINGLE_ERROR})
  }
 
}






