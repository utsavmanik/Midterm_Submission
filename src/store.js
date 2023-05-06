import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import wishListReducer from "./slices/wishListSlice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishList: wishListReducer
    },
})