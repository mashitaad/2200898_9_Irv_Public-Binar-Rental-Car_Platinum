import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../config";
import axios from "axios";




export const customerGetOrderById = createAsyncThunk("customer/order/id", async (id) => {

    const token= document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

    const apiUrl = config.apiBaseUrl
    const response = await axios.get(apiUrl + `/customer/order/${id}`,{
        headers: {
            access_token: token
        }
    })
    return response.data
})



export const customerGetAllOrder = createAsyncThunk('order/customer/getAllOrder', async (params = {}) => {
    const token= document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

    const apiUrl = config.apiBaseUrl;

    try {
        const response = await axios.get(apiUrl + "/customer/v2/order", {
            params,
            headers: {
                access_token: token
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});


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
            .addCase(customerGetAllOrder.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})
export const orderSelector = {
    selectCustomerOrdeyById: (state) => state.order.data,
    selectCustomerAllOrders: (state) => state.order.data,

}

export default orderSlice.reducer