import { combineReducers } from 'redux';
import { forcastReducer } from './forcastSlice';
import { locationReducer } from './locationSlice';
import { weatherReducer } from './weatherSlice';

const weatherRootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  forcast: forcastReducer
});

export default weatherRootReducer;
