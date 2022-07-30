import { put } from 'redux-saga/effects';

import { GET_LOCATION_SEARCH_RESULTS, GET_WEATHER_DETAILS_URL } from '../../../apis';
import { errorHandler } from '../../../utils';
import {
  getLocationListFail,
  getLocationListStart,
  getLocationListSuccess,
  getWeatherDetailFail,
  getWeatherDetailStart,
  getWeatherDetailSuccess
} from '../../sagaActions';

// get search list of location saga
export function* getLocationListSaga(action) {
  yield put(getLocationListStart());
  const { searchTerm = '' } = action.payload;
  yield errorHandler({
    endpoint: `${GET_LOCATION_SEARCH_RESULTS}${searchTerm}`,
    successHandler: yield function* (response) {
      yield put(getLocationListSuccess(response));
    },
    failHandler: yield function* (response) {
      yield put(getLocationListFail(response));
    },
    failHandlerType: 'CUSTOM',
    apiType: 'get'
  });
}

// get weather details saga
export function* getWeatherDetailSaga(action) {
  yield put(getWeatherDetailStart());
  const { location = '' } = action.payload;
  yield errorHandler({
    endpoint: `${GET_WEATHER_DETAILS_URL}${location}`,
    successHandler: yield function* (response) {
      yield put(getWeatherDetailSuccess(response));
    },
    failHandler: yield function* (response) {
      yield put(getWeatherDetailFail(response));
    },
    failHandlerType: 'CUSTOM',
    apiType: 'get'
  });
}
