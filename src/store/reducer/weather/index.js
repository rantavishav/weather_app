import { combineReducers } from 'redux';
import { locationReducer } from './locationSlice';
import { weatherReducer } from './weatherSlice';

const weatherRootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer
});

export default weatherRootReducer;
