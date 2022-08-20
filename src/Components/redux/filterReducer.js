import { createSlice } from "@reduxjs/toolkit";

export const filterRed = createSlice({
    name: "filter",
    initialState: {
        data: [
            {
                name: "book1",
                type: "book"
            },
            {
                name: "book2",
                type: "book"
            },
            {
                name: "pc1",
                type: "ele"
            },
            {
                name: "kit",
                type: "tool"
            },

        ],
        activeType: "All",
    },
    reducers: {
        filterby: (state, actions) => {
            state.activeType = actions.payload
        },
    }
})
export const { filterby } = filterRed.actions;
export default filterRed.reducer;