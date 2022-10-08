import { registration } from '../services/Auth.service';

import { call, put, takeLatest } from 'redux-saga/effects';

function* registrationSaga({ payload }) {
    try {
        const { firstName, lastName } = payload;
        yield call(registration, firstName, lastName);
        yield put({ type: 'AUTHORIZATION_SUCCESS', payload: { firstName, lastName } });
    } catch (error) {
        yield put({ type: 'AUTHORIZATION_FAIL', payload: error.message, error: true });
    }
}

export default function* registrationSagaWrapper () {
    yield takeLatest('SIGN_UP', registrationSaga);
}