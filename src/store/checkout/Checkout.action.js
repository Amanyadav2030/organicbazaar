import axios from "axios";
import { ADD_CHECKOUT_ERROR, ADD_CHECKOUT_LOADING, ADD_CHECKOUT_SUCCESS, GET_CHECKOUT_ERROR, GET_CHECKOUT_LOADING, GET_CHECKOUT_SUCCESS, UPDATE_CHECKOUT_ERROR, UPDATE_CHECKOUT_LOADING, UPDATE_CHECKOUT_SUCCESS } from "./Checkout.types";
let checkoutId = localStorage.getItem('af#@*--afasdadfj')||''
export const getCheckoutAPI = (token) => async (dispatch) => {
    dispatch({ type: GET_CHECKOUT_LOADING });
    try { 
      const res = await axios.get(`${import.meta.env.VITE_API_KEY}/checkout`,{
        headers: {
            authorization: token
        }
    })
      console.log(res,'inside checkout get action')
      dispatch({ type: GET_CHECKOUT_SUCCESS, payload: res.data })
    } catch (er) {
      dispatch({ type: GET_CHECKOUT_ERROR })
    }
  }
  export const addCheckoutAPI = (token,data) => async (dispatch) => {
    dispatch({ type: ADD_CHECKOUT_LOADING });
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_KEY}/checkout`,data, {
        headers: {
          authorization: token
        }
      })
      console.log('inside checkout post action',res.data)
      // dispatch(getCheckoutAPI(token));
      dispatch({ type: ADD_CHECKOUT_SUCCESS ,payload:res.data});
    } catch (er) {
      dispatch({ type: ADD_CHECKOUT_ERROR })
    }
  }
  export const updateCheckoutAPI = (token,data) => async (dispatch) => {
    dispatch({ type: UPDATE_CHECKOUT_LOADING });
    let checkoutId = localStorage.getItem('af#@*--afasdadfj')||'';
    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_KEY}/checkout/${checkoutId}`,data, {
        headers: {
          authorization: token
        }
      })
      console.log('inside checkout post action',res.data)
      // dispatch(getCheckoutAPI(token));
      dispatch({ type: UPDATE_CHECKOUT_SUCCESS});
    } catch (er) {
      dispatch({ type: UPDATE_CHECKOUT_ERROR })
    }
  }
