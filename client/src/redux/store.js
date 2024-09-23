import { configureStore } from "@reduxjs/toolkit";
import Userreducer from "./userSlice"
import stateReducer from "./stateSlice"
import cityReducer from "./citySlice"
export const store=configureStore({
    reducer:{
        user:Userreducer,
        state:stateReducer,
        city:cityReducer
    }
})