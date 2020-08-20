// action types
import {
    GET_USERS_INIT,
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,

    GET_USER_INIT,
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    EDIT_USER,
} from '../action-types';


export const getUsersInit = (count) => {
    return {
        type: GET_USERS_INIT,
        payload: {count}
    }
}
export const getUsersStart = () => {
    return {
        type: GET_USERS_START,
    }
};
export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: {users}
    }
};
export const getUsersFail = () => {
    return {
        type: GET_USERS_FAIL,
    }
}

export const getUserInit = () => {
    return {
        type: GET_USER_INIT,
    }
}
export const getUserStart = () => {
    return {
        type: GET_USER_START,
    }
};
export const getUserSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        payload: {user}
    }
};
export const getUserFail = () => {
    return {
        type: GET_USER_FAIL,
    }
}
export const editUser = (user) => {
    return {
        type: EDIT_USER,
        payload: {user}
    }
}