// saga effects
import { all } from 'redux-saga/effects';

// sagas
import { usersSaga } from './users/saga';


export function* watchSaga() {
    yield all([
        usersSaga(),
    ])
}