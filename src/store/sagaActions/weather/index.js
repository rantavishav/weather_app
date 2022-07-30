import { createAction } from '@reduxjs/toolkit';

export const getSearchListAction = createAction('GET_SEARCH_LIST');

export const getWeatherDetailAction = createAction('GET_WEATHER_DETAILS');

export const getThreeDayForcastAction = createAction('GET_THREE_DAY_FORCAST');
