

import { current,createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state = initialState, action) {
            console.log("addItem", action.payload)
            const newItem = action.payload
            console.log("newItem", state)
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)

            }
            state.totalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)
            }, 0)
        },
        removeItem(state, action) {
            const id = action.payload
            console.log("newItem", id)
            const existingItem = state.cartItems.find(item => item.id === id)
            state.totalQuantity--
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            }
            else {
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)

            }
            state.totalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)


            }, 0)
        },
        deleteItem(state, action) {
            const id = action.payload
            console.log("id", id)
            console.log("id", state);

            const existingItem = state.cartItems.find(item => item.id === id)
            console.log("existingItem",current(existingItem))

            if (existingItem) {
                console.log("existingItem", current(state))

                state.cartItems = state.cartItems.filter(item => item.id !== id)
                console.log(" totalQuantity ",  current(state))

                state.totalQuantity = (state.totalQuantity) - (existingItem.quantity)
                // console.log(" totalQuantity ", state.existingItem)
                // console.log(" totalQuantity ", state.totalQuantity)
            }

            state.totalAmount = state.cartItems.reduce((total, item) => {
                // console.log("total", total)
                // console.log("item", item)
                return total + Number(item.price) * Number(item.quantity)


            }, 0)
        }
    }
})
export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice;