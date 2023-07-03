/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import config from '../config';
import axios from 'axios';

export const customerGetOrderById = createAsyncThunk('customer/order/id', async (id) => {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('token='))
    ?.split('=')[1];

  const apiUrl = config.apiBaseUrl;
  const response = await axios.get(apiUrl + `/customer/order/${id}`, {
    headers: {
      access_token: token
    }
  });
  return response.data;
});

export const customerGetAllOrder = createAsyncThunk(
  'order/customer/getAllOrder',
  async (params = {}) => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];

    const apiUrl = config.apiBaseUrl;

    try {
      const response = await axios.get(apiUrl + '/customer/v2/order', {
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
  }
);

export const customerDeletOrderById = createAsyncThunk('order/customer/delete', async (id) => {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('token='))
    ?.split('=')[1];

  const apiUrl = config.apiBaseUrl;

  try {
    await axios.delete(apiUrl + `/customer/order/${id}`, {
      headers: {
        access_token: token
      }
    });
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const customerUpdateOrder = createAsyncThunk(
  'order/customer/update',
  async ({ id, formData }) => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];
    const apiUrl = config.apiBaseUrl;
    console.log(id);
    try {
      const response = await axios.put(apiUrl + `/customer/order/${id}/slip`, formData, {
        headers: {
          'content-type': 'multipart/json',
          access_token: token
        }
      });

      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    data: {},
    loading: false,
    errorMessage: null,
    successUpload: false
  },
  reducers: {
    setOrder: (state, action) => {
      return action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(customerGetOrderById.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(customerGetAllOrder.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(customerUpdateOrder.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.successUpload = true;
      })
      .addCase(customerUpdateOrder.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(customerUpdateOrder.rejected, (state, action) => {
        state.errorMessage = 'error';
        state.loading = false;
      });
  }
});
export const orderSelector = {
  selectCustomerOrdeyById: (state) => state.order.data,
  selectCustomerAllOrders: (state) => state.order.data,
  loading: (state) => state.order.loading,
  errorMessage: (state) => state.order.errorMessage,
  successUpload: (state) => state.order.successUpload
};

export default orderSlice.reducer;
