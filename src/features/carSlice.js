import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';


export const getAllCars = createAsyncThunk("car/getAllCars", async (params = {}) => {
    const apiUrl = config.apiBaseUrl
    const response = await axios.get(apiUrl + "/customer/v2/car", {
        params
    })
    return response.data
})

export const getCarById = createAsyncThunk("car/getCar", async (id) => {
    const apiUrl = config.apiBaseUrl
    const response = await axios.get(apiUrl + `/customer/car/${id}`)
    return response.data
})

const carSlice = createSlice({
    name: "car",
    initialState: {
        data: {},
        loading: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(getAllCars.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getCarById.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(getCarById.pending, (state, action) => {
                state.loading = false
            })
    }
})
export const carSelectors = {
    selectAllCars: (state) => state.car.data,
    selectCarById: (state) => state.car.data,
    loading: (state) => state.car.loading,
}
export default carSlice.reducer;