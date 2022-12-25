import axios from "axios";
import {  GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./product.types";

export const getProductAPI = (order,filter="NA") => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOADING });
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_KEY}/product?order=${order}&filter=${filter}`)
    // console.log(res,'inside product action')
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
  } catch (er) {
    dispatch({ type: GET_PRODUCT_ERROR })
  }
 
}
export const addProductAPI = (token,data) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOADING });
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_KEY}/product`,data, {
      headers: {
          authorization: token
      }
  })
    console.log(res,'inside product post action')
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
  } catch (er) {
    dispatch({ type: GET_PRODUCT_ERROR })
  }
 
}






