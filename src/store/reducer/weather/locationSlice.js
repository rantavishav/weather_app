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
    getlocationListStart: (state) => {
      state.isLoading = true;
    },
    getlocationListSuccess: (state, action) => {
      state.isLoading = false;
      state.locationList = action?.payload?.slice(0, 5);
    },
    getlocationListFail: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { getlocationListStart, getlocationListSuccess, getlocationListFail } =
  locationSlice.actions;

export const locationReducer = locationSlice.reducer;
