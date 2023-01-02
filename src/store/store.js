import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { cartReducer } from "./cart/Cart.reducer";
import { productReducer } from "./products/product.reducer";
import { singleReducer } from "./single/product_details.reducer";
import { orderReducer } from "./order/Order.reducer";
import { authReducer } from "./auth/auth.reducer";
import { checkoutReducer } from "./checkout/Checkout.reducer";

const rootReducer = combineReducers({
    productData: productReducer,
    singleData:singleReducer,
    cartData:cartReducer, 
    authData:authReducer,
    checkoutData:checkoutReducer,
    orderData:orderReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))