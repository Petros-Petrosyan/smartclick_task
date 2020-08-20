import produce from 'immer';

// action types
import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,

    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
} from '../action-types';


const initialState = {
    usersList: {
        users: null,
        loading: false,
        exist: false,
    },
    singleUser: {
        user: null,
        loading: false,
        exist: false,
    }
};


const getUsersStart = (state) => {
    return produce(state, draftState => {
        draftState.usersList.loading = true;
        draftState.usersList.exist = false;
    })
};
const getUsersSuccess = (state, payload) => {
    const {users} = payload;

    return produce(state, draftState => {
        draftState.usersList.users = users;
        draftState.usersList.loading = false;
        draftState.usersList.exist = true;
    })
};
const getUsersFail = (state) => {
    return produce(state, draftState => {
        draftState.usersList.loading = false;
        draftState.usersList.exist = false;
    })
};

const getUserStart = (state) => {
    return produce(state, draftState => {
        draftState.singleUser.loading = true;
        draftState.singleUser.exist = false;
    })
};
const getUserSuccess = (state, payload) => {
    const {user} = payload;

    return produce(state, draftState => {
        draftState.singleUser.user = user;
        draftState.singleUser.loading = false;
        draftState.singleUser.exist = true;
    })
};
const getUserFail = (state) => {
    return produce(state, draftState => {
        draftState.singleUser.loading = false;
        draftState.singleUser.exist = false;
    })
};


const usersReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_USERS_START: return getUsersStart(state);
        case GET_USERS_SUCCESS: return getUsersSuccess(state, payload);
        case GET_USERS_FAIL: return getUsersFail(state);

        case GET_USER_START: return getUserStart(state);
        case GET_USER_SUCCESS: return getUserSuccess(state, payload);
        case GET_USER_FAIL: return getUserFail(state);

        default: return state;
    }
};


export { usersReducer };