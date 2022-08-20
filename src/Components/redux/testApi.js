import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import axios from "axios";
export const addUser = createAsyncThunk("/api/user", async (user) => {
    const res = await axios.post("http://localhost:5000/api/user", user)
    return res.data
})
export const userSlice = createSlice({
    name: "add",
    initialState: {
        userData: {
            name: "",
            email: "",
        },
        loading: false,
        error: false,
    },
    extraReducers: {
        [addUser.pending]: (state) => {
            state.loading = true;
        },
        [addUser.fulfilled]: (state, actions) => {
            console.log("actions")
            state.userData = actions.payload
            state.loading = false;
        },
        [addUser.rejected]: (state) => {
            state.error = true
            state.loading = false;
        }
    }
})
export default userSlice.reducer;