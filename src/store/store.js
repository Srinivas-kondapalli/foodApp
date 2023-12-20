import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shoppinh-cart/cartSlice";
import cartUiSlice from "./shoppinh-cart/cartUiSlice";
const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        cartUi:cartUiSlice.reducer
    }
})
export default store;