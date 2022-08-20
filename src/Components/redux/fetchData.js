// import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';
// import { useState } from "react";
// export const fetchedSlice = createSlice({
//     name: 'fetchData',
//     initialState: {

//     },
// })
import { createSlice } from "@reduxjs/toolkit";
// var regex = `/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`;
export const formSlice = createSlice({
    name: 'checker',
    initialState: {
        emailCheck: false,
        passwordCheck: false,
    },
    reducers: {
        validEmail: (state, actions) => {
            state.emailCheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(actions.payload) ? true : false
        },
        validPassword: (state) => {
            state.passwordCheck = true
        },
    }
})
export const { validEmail, validPassword } = formSlice.actions;
export default formSlice.reducer