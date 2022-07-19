import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

<<<<<<< HEAD
export const getVideoList = createAsyncThunk("GET_VIDEO_LIST", async (url) => {
  try {
    const res = await axios.get(url);
    return res.data.items;
  } catch (err) {
    console.log(err);
  }
});
=======
export const getVideoList = createAsyncThunk(
    "GET_VIDEO_LIST",
    async (url) => {
        try{
            const res = await axios.get(url)
            return res.data.items
        }catch(err){
            console.log(err)
        }
    }
)
>>>>>>> 7029b56878acd079ca340aa91d2f7fb95b74f887

const videoSlice = createSlice({
  name: "video",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideoList.fulfilled, (state, action) => {
      console.log("액션페이로드", action.payload);
      state.data = action.payload;
    });
  },
});

<<<<<<< HEAD
export default videoSlice.reducer;
=======
const videoSlice =  createSlice({
    name:'video',
    initialState:{
        data:[],
    },
    reducers: {  
    },
    extraReducers:(builder)=>{
        builder.addCase(getVideoList.fulfilled,(state,action)=>{
            console.log('액션페이로드',action.payload)
            state.data=action.payload;
        })
    }
})

export default videoSlice.reducer
>>>>>>> 7029b56878acd079ca340aa91d2f7fb95b74f887
