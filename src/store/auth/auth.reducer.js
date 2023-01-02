import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS } from "./auth.types"

let token = JSON.parse(localStorage.getItem("token")) || null;
const initialState = {
    token:token,
    login:false,
    error:false,
    isAuth:token?true:false
};
export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_LOGIN_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case AUTH_LOGIN_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            } 
        }
        case AUTH_LOGIN_SUCCESS: {
            console.log(payload,'this is token')
            localStorage.setItem("token", JSON.stringify(payload.token))
            return {
                ...state,
                loading: false,
                error: false,
                token: payload.token,
                isAuth:true
            }
        }
        case AUTH_LOGOUT_SUCCESS: { 
            localStorage.removeItem("token")
            return {
                ...state,
                loading: false,
                error: false,
                isAuth:false,
                token:null
            }
        }

        default: {
            return state
        }
    }
}