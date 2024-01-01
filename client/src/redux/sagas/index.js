/* eslint-disable no-unused-vars */
import { takeLatest, call } from "redux-saga/effects";
import * as actions from '../actions';
import * as api from '../../api';

function* fetchHotelSaga(action) {
    const hotels = yield call(api.fetchHotels);
}

function* mySaga() {
    yield takeLatest(actions.getHotels.getHotelsRequest, fetchHotelSaga)
}

export default mySaga;