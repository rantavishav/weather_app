import { all, takeLatest } from 'redux-saga/effects';

import { getLocationListSaga, getThreeDayForcastListSaga, getWeatherDetailSaga } from './weather';
import {
  getSearchListAction,
  getThreeDayForcastAction,
  getWeatherDetailAction
} from '../sagaActions';

// watcher saga
function* watchWeather() {
  yield takeLatest(getSearchListAction.type, getLocationListSaga);
  yield takeLatest(getWeatherDetailAction.type, getWeatherDetailSaga);
  yield takeLatest(getThreeDayForcastAction.type, getThreeDayForcastListSaga);
}

export default function* rootSaga() {
  yield all([watchWeather()]);
}
