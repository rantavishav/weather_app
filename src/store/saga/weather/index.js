import { put } from 'redux-saga/effects';

import { GET_WEATHER_DETAILS } from '../../../apis';
import { errorHandler } from '../../../utils';
import {
  getWeatherDetailFail,
  getWeatherDetailStart,
  getWeatherDetailSuccess
} from '../../sagaActions';

// get weather details saga
export function* getWeatherDetailSaga() {
  yield put(getWeatherDetailStart());
  yield errorHandler({
    endpoint: GET_WEATHER_DETAILS,
    successHandler: yield function* (response) {
      yield put(getWeatherDetailSuccess(response.data));
    },
    failHandler: yield function* (response) {
      yield put(getWeatherDetailFail(response));
    },
    failHandlerType: 'CUSTOM',
    apiType: 'get'
  });
}
