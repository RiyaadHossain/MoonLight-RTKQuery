import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existProduct = state.products.find(product => product._id === action.payload._id)
            if (existProduct) {
                existProduct.quantity += 1
                state.products.filter(product => product._id !== action.payload._id).push(existProduct)
            } else {
                state.products.push({ ...action.payload, quantity: 1 })
            }

        },

        removeFromCart: (state, action) => {
            const existProduct = state.products.find(product => product._id === action.payload._id)
            if (existProduct.quantity > 1) {
                existProduct.quantity = existProduct.quantity - 1
                state.products.filter(product => product._id !== existProduct._id).push(existProduct)
            } else {
                state.products = state.products.filter(product => product._id !== existProduct._id)
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer