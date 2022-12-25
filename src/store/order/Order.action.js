import axios from "axios";
import {  ADD_ORDER_SUCCESS, GET_ORDER_SUCCESS } from "./Order.types";


export const getOrderAPI = () => async (dispatch) => {

    dispatch({ type: GET_ORDER_SUCCESS });
}


export const postOrderAPI = (data) => async (dispatch) => {
        dispatch({ type: ADD_ORDER_SUCCESS, payload: data })
}