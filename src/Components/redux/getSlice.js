import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// returned data put in action.payload
export const getData = createAsyncThunk('/api/users', async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        console.log("hi", res.data)
        return res.data
    }).catch(e => console.log(e))
})
export const getSlice = createSlice({
    name: "get",
    initialState: {
        users: [],
        loading: false,
        error: true
    },
    reducers: {

    },
    extraReducers: {
        [getData.pending]: (state) => {
            state.loading = true
        },
        [getData.fulfilled]: (state, actions) => {
            console.log(actions)
            state.users = actions.payload
            state.loading = false;
        },
        [getData.rejected]: (state) => {
            state.error = true
        }
    }

})
export default getSlice.reducer;