import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  locationList: null,
  errorMsg: ''
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    getLocationListStart: (state) => {
      state.isLoading = true;
    },
    getLocationListSuccess: (state, action) => {
      state.isLoading = false;
      state.locationList = action?.payload?.slice(0, 5);
    },
    getLocationListFail: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload;
    },
    resetLocationList: (state) => {
      state.locationList = null;
      state.errorMsg = '';
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  getLocationListStart,
  getLocationListSuccess,
  getLocationListFail,
  resetLocationList
} = locationSlice.actions;

export const locationReducer = locationSlice.reducer;
