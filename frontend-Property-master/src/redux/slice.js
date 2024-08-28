import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchItems = createAsyncThunk("fetch-items", async()=>{
   const res =  await axios.get(process.env.REACT_APP_PROPERTY_VIEW_ALL_URL);
   console.log(res.data)
   return res.data
    // return res.data;
})

const slice = createSlice({
    name:'RealEstate',
    initialState:{
        itemList:[],
        loading:false,
        error:false
    },
    reducers:{
        addItems:(state,action)=>{
            state.itemList = action.payload;
        },
        removeItem:(state,action)=>{
            state.itemList = state.itemList.filter(item=>item.id!==action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchItems.pending,(state,action)=>{
            state.loading = true;
        }).addCase(fetchItems.fulfilled,(state,action)=>{
            state.itemList = action.payload;
        }).addCase(fetchItems.rejected,(state,action)=>{
            state.error = true;
            state.itemList = {};
            state.loading = false;
        })
    }
})  ;

export const{addItems,removeItem} = slice.actions;
export default slice.reducer;