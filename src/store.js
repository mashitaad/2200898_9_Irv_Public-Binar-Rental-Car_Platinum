import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./features/carSlice";
import orderReducer from "./features/orderSlice";
import registerReducer from "./features/registerSlice";

const store = configureStore({
  reducer: {
    car: carReducer,
    order: orderReducer,
    register: registerReducer,
  },
});

export default store;
