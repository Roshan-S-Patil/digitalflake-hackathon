import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const fetchWarehouses=createAsyncThunk('fetchWarehouses',async()=>{
    const response=await axios.get("/warehouse")
    return response.data
})
export const addWarehouse=createAsyncThunk('addWarehouse',async({name,code,state,city})=>{
    const response=await axios.post("/warehouse/add",{name,code,state,city},{headers:{"Content-Type":'application/json'}})
    return response.data
})
export const editWarehouse=createAsyncThunk('editWarehouse',async({_id,update})=>{
    const response=await axios.put("/warehouse/edit",{_id,update},{headers:{"Content-Type":'application/json'}})
    return response.data
})
export const deleteWarehouse=createAsyncThunk('deleteWarehouse',async({_id})=>{
    const response=await axios.delete(`/warehouse/delete?_id=${_id}`,{headers:{"Content-Type":'application/json'}})
    console.log(response)
    return response.data
})
const warehouseSlice=createSlice({
    name:"warehouse",
    initialState:{
        warehouses:null,
        loadingWarehouse:false,
        warehouseError:false
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        // FETCH STATES
        builder.addCase(fetchWarehouses.pending,(state)=>{
            state.loadingWarehouse=true;
            state.warehouseError=false
        })
        builder.addCase(fetchWarehouses.fulfilled,(state,action)=>{
            state.warehouses=action.payload;
            state.warehouseError=false
            state.loadingWarehouse=false
        })
        builder.addCase(fetchWarehouses.rejected,(state)=>{
            state.loadingWarehouse=false;
            state.warehouseError=true
        })
        // CREATE STATE
        builder.addCase(addWarehouse.pending,(state,action)=>{
            state.loadingWarehouse=true;
            state.warehouseError=false
        })
        builder.addCase(addWarehouse.fulfilled,(state,action)=>{
       
            state.warehouses= [...state.warehouses,action.payload]
            state.warehouseError=false
            state.loadingWarehouse=false
        })
        builder.addCase(addWarehouse.rejected,(state,action)=>{
            state.loadingWarehouse=false;
            state.warehouseError=true
        })
        //EDIT STATE
        builder.addCase(editWarehouse.pending,(state)=>{
            state.loadingWarehouse=false;
            state.warehouseError=false
        })
        builder.addCase(editWarehouse.fulfilled,(state,action)=>{
            state.warehouses= state.warehouses.map((warehouse)=>{return (warehouse._id===action.payload._id)?action.payload:warehouse});
            state.warehouseError=false
        })
        builder.addCase(editWarehouse.rejected,(state)=>{
            state.loadingWarehouse=false;
            state.warehouseError=true
        })
        // DELETE STATE
        builder.addCase(deleteWarehouse.pending,(state)=>{
            state.loadingWarehouse=true;
            state.warehouseError=false
        })
        builder.addCase(deleteWarehouse.fulfilled,(state,action)=>{
            state.warehouses=state.warehouses.filter((warehouse)=>{return warehouse._id!==action.payload._id});
            state.warehouseError=false
            state.loadingWarehouse=false
        })
        builder.addCase(deleteWarehouse.rejected,(state)=>{
            state.loadingWarehouse=false;
            state.warehouseError=true
        })
    }
})
// export const {}=warehouseSlice.actions
export default warehouseSlice.reducer