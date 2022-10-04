/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/subregion/Southern Asia';

export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    try {
      const response = axios.get(baseUrl);
      return response;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  countries: [],
  loading: 'idle',
};

export const homeSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.countries = action.payload.data;
      state.loading = 'fulfiled';
    });
  },
});

export default homeSlice.reducer;
