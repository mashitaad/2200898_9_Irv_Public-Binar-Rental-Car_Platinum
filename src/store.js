import { configureStore } from "@reduxjs/toolkit";
import carReducer from './features/carSlice';
import orderReducer from './features/orderSlice'

const store = configureStore({
    reducer: {
        car: carReducer,
        order: orderReducer
    },
  });


  export default store;