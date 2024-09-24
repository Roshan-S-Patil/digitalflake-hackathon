import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const login=createAsyncThunk("login",async({email,password})=>{
        const response=await axios.post("/user/login",{email,password},{headers:{"Content-Type":"application/json"}})
        return response
})
export const logout=createAsyncThunk('logout',async()=>{
        const response=await axios.post('/user/logout',{},{headers:{"Content-Type":"application/json"}})
        return response.data
})
const userSlice=createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        loggingIn:false,
        userError:false,
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.loggingIn=true
            state.userError=false
        })
        builder.addCase(login.fulfilled,(state,action)=>{
            state.loggingIn=false;
            state.currentUser=action.payload
            console.log(state.currentUser);
            localStorage.setItem("user",JSON.stringify(action.payload))
            console.log(action.payload.status)
            window.location.href="/"
        })
        builder.addCase(login.rejected,(state)=>{
            state.loggingIn=false;
            state.userError=true;
        })
        // Logut
        builder.addCase(logout.pending,(state)=>{
            state.loggingIn=true
            state.userError=false
        })
        builder.addCase(logout.fulfilled,(state,action)=>{
            state.loggingIn=false;
            state.currentUser=null
            localStorage.removeItem("user")
            window.location.href="/login"
        })
        builder.addCase(logout.rejected,(state)=>{
            state.loggingIn=false;
            state.userError=true;
        })
    }
})
export default userSlice.reducer