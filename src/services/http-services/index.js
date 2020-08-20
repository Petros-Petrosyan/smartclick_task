import axios from 'axios';

export const baseRequest = axios.create({
    baseURL: 'https://randomuser.me/api'
});
export const firebaseRequest = axios.create({
    baseURL: 'https://user-58786.firebaseio.com/user'
});

export {
    getUsersRequest,
    getUserRequest,
    editUserRequest,
} from './users';