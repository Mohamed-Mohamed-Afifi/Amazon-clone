import { createSlice } from "@reduxjs/toolkit";

export const countStore = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})
export const { increment, decrement } = countStore.actions;
export default countStore.reducer;