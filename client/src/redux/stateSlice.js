import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const fetchStates=createAsyncThunk('fetchStates',async()=>{
    const response=await axios.get("/state")
    return response.data
})
export const addState=createAsyncThunk('addState',async({name,code})=>{
    const response=await axios.post("/state/add",{name,code},{headers:{"Content-Type":'application/json'}})
    console.log(response.data)
    return response.data
})
export const editState=createAsyncThunk('editState',async({_id,update})=>{
    const response=await axios.put("/state/edit",{_id,update},{headers:{"Content-Type":'application/json'}})
    console.log(response.data)
    return response.data
})
export const deleteState=createAsyncThunk('deleteState',async({_id})=>{
    const response=await axios.post("/state/delete",{_id},{headers:{"Content-Type":'application/json'}})
    return response.data
})
const stateSlice=createSlice({
    name:"state",
    initialState:{
        states:null,
        loadingState:false,
        stateError:false
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        // FETCH STATES
        builder.addCase(fetchStates.pending,(state)=>{
            state.loadingState=true;
            state.stateError=false
        })
        builder.addCase(fetchStates.fulfilled,(state,action)=>{
            state.states=action.payload;
            state.stateError=false
        })
        builder.addCase(fetchStates.rejected,(state)=>{
            state.loadingState=false;
            state.stateError=true
        })
        // CREATE STATE
        builder.addCase(addState.pending,(state,action)=>{
            state.loadingState=true;
            state.stateError=false
        })
        builder.addCase(addState.fulfilled,(state,action)=>{
       
            state.states= [...state.states,action.payload]
            state.stateError=false
            state.loadingState=false
        })
        builder.addCase(addState.rejected,(state,action)=>{
            state.loadingState=false;
            state.stateError=true
        })
        //EDIT STATE
        builder.addCase(editState.pending,(state)=>{
            state.loadingState=false;
            state.stateError=false
        })
        builder.addCase(editState.fulfilled,(state,action)=>{
            state.states= state.states.map((state)=>{return (state._id===action.payload._id)?action.payload:state});
            state.stateError=false
        })
        builder.addCase(editState.rejected,(state)=>{
            state.loadingState=false;
            state.stateError=true
        })
        // DELETE STATE
        builder.addCase(deleteState.pending,(state)=>{
            state.loadingState=false;
            state.stateError=false
        })
        builder.addCase(deleteState.fulfilled,(state,action)=>{
            state.states=state.states.filter(state=>{return state._id!==action.payload._id});
            state.stateError=false
        })
        builder.addCase(deleteState.rejected,(state)=>{
            state.loadingState=false;
            state.stateError=true
        })
    }
})
// export const {}=stateSlice.actions
export default stateSlice.reducer