import { configureStore } from "@reduxjs/toolkit";
import carReducer from './features/carSlice';

const store = configureStore({
    reducer: {
        car: carReducer,
    },
  });


  export default store;