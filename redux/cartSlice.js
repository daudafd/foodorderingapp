import { createSlice } from "@reduxjs/toolkit";
import { initialize } from "next/dist/server/lib/render-server";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        total: 0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state) => {
            state = initialState;
        },
    },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;