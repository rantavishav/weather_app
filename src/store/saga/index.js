import { all, takeLatest } from 'redux-saga/effects';

import { getLocationListSaga, getWeatherDetailSaga } from './weather';
import { getSearchListAction, getWeatherDetailAction } from '../sagaActions';

// watcher saga
function* watchWeather() {
  yield takeLatest(getSearchListAction.type, getLocationListSaga);
  yield takeLatest(getWeatherDetailAction.type, getWeatherDetailSaga);
}

export default function* rootSaga() {
  yield all([watchWeather()]);
}
