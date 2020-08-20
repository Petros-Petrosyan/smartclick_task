import {
    baseRequest,
    firebaseRequest
} from '.';

// get users
export const getUsersRequest = async (params) => {
    const res = await baseRequest.get('', {params});
    return res;
}

// get user
export const getUserRequest = async () => {
    const res = await firebaseRequest.get('.json');
    return res;
}

// edit user
export const editUserRequest = async (user) => {
    const res = await firebaseRequest.put(`/0.json`, user)
    return res
}