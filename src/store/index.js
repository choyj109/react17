<<<<<<< HEAD
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import videoSlice from "./video/videoSlice";

const reducer = combineReducers({
  video: videoSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
=======
import { configureStore,combineReducers } from '@reduxjs/toolkit';
import videoSlice from './video/videoSlice';

const reducer  = combineReducers({
    video:videoSlice,
})

const store = configureStore({
    reducer,
    middleware:(getDefaultMiddleware) =>  getDefaultMiddleware()
})
>>>>>>> 7029b56878acd079ca340aa91d2f7fb95b74f887

export default store;
