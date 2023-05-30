import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";

export const register = createAsyncThunk(
  "user/register",
  async (params = {}, { rejectWithValue }) => {
    try {
      const apiUrl = config.apiBaseUrl;
      const response = await axios.post(
        apiUrl + "/customer/auth/register",
        params
      );
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    data: {},
    loading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = "pending";
        state.errorMessage = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.token = action.payload;
        state.errorMessage = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = "rejected";
        state.errorMessage = action.payload;
      });
  },
});

export const registerSelector = {
  selectToken: (state) => state.register.data,
  loading: (state) => state.register.loading,
  errorMessage: (state) => state.register.errorMessage,
};

export default registerSlice.reducer;
