import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  threeDayForcastList: null,
  errorMsg: ''
};

const forcastSlice = createSlice({
  name: 'forcast',
  initialState,
  reducers: {
    getThreeDayForcastListStart: (state) => {
      state.isLoading = true;
    },
    getThreeDayForcastListSuccess: (state, action) => {
      state.isLoading = false;
      state.threeDayForcastList = action?.payload;
    },
    getThreeDayForcastListFail: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  getThreeDayForcastListStart,
  getThreeDayForcastListSuccess,
  getThreeDayForcastListFail
} = forcastSlice.actions;

export const forcastReducer = forcastSlice.reducer;
