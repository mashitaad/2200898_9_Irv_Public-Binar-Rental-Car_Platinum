import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../config";
import axios from "axios";

export const customerGetOrderById = createAsyncThunk("customer/order/id", async (id) => {
    const token = localStorage.getItem('token')
    const apiUrl = config.apiBaseUrl
    const response = await axios.get(apiUrl + `/order/${id}`,{
        headers: {
            "content-type": "multipart/form-data",
                Authorization: `Bearer ${token}`
        }
    })
    return response.data
})



const orderSlice = createSlice({
    name: 'order',
    initialState: {
        data: {},
    },
    reducers: {
        setOrder: (state, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(customerGetOrderById.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})
export const orderSelector = {
    selectCustomerOrdeyById: (state) => state.order.data 

}

export default orderSlice.reducer