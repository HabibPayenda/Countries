/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/capital';

export const getCountry = createAsyncThunk(
  'country/getCountry',
  async (name) => {
    try {
      const response = axios.get(`${baseUrl}/${name}`);
      return response;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  country: [],
  loading: 'idle',
};

export const homeSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.country = action.payload.data;
      state.loading = 'fulfiled';
    });
  },
});

export default homeSlice.reducer;
