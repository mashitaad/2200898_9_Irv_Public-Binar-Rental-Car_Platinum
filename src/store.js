import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./features/carSlice";
import orderReducer from "./features/orderSlice";
import authReducer from './features/authSlice'

const store = configureStore({
  reducer: {
    car: carReducer,
    order: orderReducer,
    auth: authReducer
  },
});

export default store;
