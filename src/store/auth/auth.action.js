import axios from "axios";
import {  AUTH_LOGIN_LOADING, AUTH_LOGIN_ERROR,AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS, } from "./auth.types";
 
export const authLoginApi = (data) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING})
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_KEY}/user/login`,data);
    // console.log(res.data,'login successfull')
    dispatch({ type: AUTH_LOGIN_SUCCESS,payload:res.data})
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_ERROR})
    console.log(error.message,'this is LOGIN action');
  }
}
export const authLogoutApi = () => async (dispatch) => {
  dispatch({ type: AUTH_LOGOUT_SUCCESS})
} 






