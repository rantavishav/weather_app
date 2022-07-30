import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  weatherDetail: null,
  errorMsg: ''
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeatherDetailStart: (state) => {
      state.isLoading = true;
    },
    getWeatherDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.weatherDetail = action.payload;
    },
    getWeatherDetailFail: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { getWeatherDetailStart, getWeatherDetailSuccess, getWeatherDetailFail } =
  weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
