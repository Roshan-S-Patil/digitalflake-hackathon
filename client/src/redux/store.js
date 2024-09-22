import { configureStore } from "@reduxjs/toolkit";
import Userreducer from "./userSlice"
import stateReducer from "./stateSlice"
export const store=configureStore({
    reducer:{
        user:Userreducer,
        state:stateReducer
    }
})