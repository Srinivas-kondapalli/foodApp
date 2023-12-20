import { createSlice } from "@reduxjs/toolkit";
const cartUiSlice = createSlice({
    name:'cartUi',
    initialState:{cartIsVisble:false},
    reducers:{
        toggle(state){
state.cartIsVisble = !state.cartIsVisble
        }
    }
})
export const {toggle}=cartUiSlice.actions;
export default cartUiSlice