import toast from 'cogo-toast';

// saga effects
import {
    put,
    takeEvery,
    all,
} from 'redux-saga/effects';

// http services
import {
    getUsersRequest,
    getUserRequest,
    editUserRequest,
} from '../../services/http-services';

// action types
import {
    GET_USERS_INIT,
    GET_USER_INIT,
    EDIT_USER
} from '../action-types';

// actions
import {
    getUsersStart,
    getUsersSuccess,
    getUsersFail,

    getUserStart,
    getUserSuccess,
    getUserFail,
} from './action';


function* getUsers(data) {
    try {
        const {payload: {count}} = data
        const params = {results: count}
        yield put(getUsersStart());
        const res = yield getUsersRequest(params);
        const {data: {results: users}} = res;
        yield put(getUsersSuccess(users));
    } catch (err) {
        yield put(getUsersFail());
        toast.error(err.message, {position: 'bottom-right'});
    }
}

function* getUser() {
    try {
        yield put(getUserStart());
        const res = yield getUserRequest();
        const user = Object.values(res.data)[0];
        yield put(getUserSuccess(user));
    } catch (err) {
        yield put(getUserFail());
        toast.error(err.message, {position: 'bottom-right'});
    }
}

function* editUser(data) {
    try {
        const {payload: {user}} = data;
        if(!Object.values(user).some((el) => el === '')) {
            yield editUserRequest(user);
            const res = yield getUserRequest();
            const newUser = Object.values(res.data)[0];
            yield put(getUserSuccess(newUser));
            toast.success('Profile successfully edited', {position: 'bottom-right'});
        } else {
            toast.error('Fields cannot be empty', {position: 'bottom-right'});
        }
    } catch (err) {
        yield put(getUserFail());
    }
}


export function* usersSaga() {
    yield all([
        takeEvery(GET_USERS_INIT, getUsers),
        takeEvery(GET_USER_INIT, getUser),
        takeEvery(EDIT_USER, editUser),
    ]);
}