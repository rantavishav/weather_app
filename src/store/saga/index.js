import { all, takeLatest } from 'redux-saga/effects';

import { getWeatherDetailSaga } from './weather';
import { getWeatherDetailAction } from '../sagaActions';

// watcher saga
function* watchWeather() {
  yield takeLatest(getWeatherDetailAction.type, getWeatherDetailSaga);
}

export default function* rootSaga() {
  yield all([watchWeather()]);
}
