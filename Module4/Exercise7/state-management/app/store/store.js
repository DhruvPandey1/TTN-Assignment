import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../reducers/fetchReducer";


export const store=configureStore({
    reducer:{
        fetchReducer:fetchReducer,
    }
});