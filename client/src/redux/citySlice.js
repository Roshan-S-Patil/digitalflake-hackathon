import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const fetchCities=createAsyncThunk('fetchCities',async()=>{
    const response=await axios.get("/city")
    return response.data
})
export const addCity=createAsyncThunk('addCity',async({name,code,state})=>{
    const response=await axios.post("/city/add",{name,code,state},{headers:{"Content-Type":'application/json'}})
    return response.data
})
export const editCity=createAsyncThunk('editCity',async({_id,update})=>{
    const response=await axios.put("/city/edit",{_id,update},{headers:{"Content-Type":'application/json'}})
    return response.data
})
export const deleteCity=createAsyncThunk('deleteCity',async({_id})=>{
    const response=await axios.delete(`/city/delete?_id=${_id}`,{headers:{"Content-Type":'application/json'}})
    console.log(response)
    return response.data
})
const citySlice=createSlice({
    name:"city",
    initialState:{
        cities:null,
        loadingCity:false,
        cityError:false
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        // FETCH STATES
        builder.addCase(fetchCities.pending,(state)=>{
            state.loadingCity=true;
            state.cityError=false
        })
        builder.addCase(fetchCities.fulfilled,(state,action)=>{
            state.cities=action.payload;
            state.cityError=false
            state.loadingCity=false
        })
        builder.addCase(fetchCities.rejected,(state)=>{
            state.loadingCity=false;
            state.cityError=true
        })
        // CREATE STATE
        builder.addCase(addCity.pending,(state,action)=>{
            state.loadingCity=true;
            state.cityError=false
        })
        builder.addCase(addCity.fulfilled,(state,action)=>{
       
            state.cities= [...state.cities,action.payload]
            state.cityError=false
            state.loadingCity=false
        })
        builder.addCase(addCity.rejected,(state,action)=>{
            state.loadingCity=false;
            state.cityError=true
        })
        //EDIT STATE
        builder.addCase(editCity.pending,(state)=>{
            state.loadingCity=false;
            state.cityError=false
        })
        builder.addCase(editCity.fulfilled,(state,action)=>{
            state.cities= state.cities.map((city)=>{return (city._id===action.payload._id)?action.payload:city});
            state.cityError=false
        })
        builder.addCase(editCity.rejected,(state)=>{
            state.loadingCity=false;
            state.cityError=true
        })
        // DELETE STATE
        builder.addCase(deleteCity.pending,(state)=>{
            state.loadingCity=true;
            state.cityError=false
        })
        builder.addCase(deleteCity.fulfilled,(state,action)=>{
            state.cities=state.cities.filter((city)=>{return city._id!==action.payload._id});
            state.cityError=false
            state.loadingCity=false
        })
        builder.addCase(deleteCity.rejected,(state)=>{
            state.loadingCity=false;
            state.cityError=true
        })
    }
})
// export const {}=citySlice.actions
export default citySlice.reducer