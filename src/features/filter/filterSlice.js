import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stock: false,
    brands: [],
    keyword: ""
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggle: (state, action ) => {
            state.stock = !state.stock
        },
        brandToggle: (state, action) => {
            if (!state.brands.includes(action.payload)) {
                state.brands.push(action.payload)
            } else {
                state.brands = state.brands.filter(brand => brand !== action.payload)
            }
        },
        search: (state, action) => {
            state.keyword = action.payload
        }
    }
})

export const {toggle, brandToggle} = filterSlice.actions
export default filterSlice.reducer