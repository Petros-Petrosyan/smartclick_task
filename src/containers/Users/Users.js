import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UsersTable } from '../../components';

// material
import CircularProgress from '@material-ui/core/CircularProgress';

// actions
import { getUsersInit } from '../../store/users/action';

// classes
import classes from './Users.module.scss';


const Users = () => {
    const dispatch = useDispatch();
    const {
        users,
        loading,
        exist,
    } = useSelector((state) => state.usersReducer.usersList);

    useEffect(() => {
        dispatch(getUsersInit(150));
    },[]);


    if (loading) {
        return <div className={classes.center}><CircularProgress disableShrink /></div>
    }
    if (exist) {
        const columns = [
            { name: 'image', title: 'Image' },
            { name: 'name', title: 'Name' },
            { name: 'gender', title: 'Gender' },
            { name: 'email', title: 'Email' },
        ];

        const rows = users.map((user, i) => {
            const {
                location: {coordinates: {latitude: lat, longitude: lng}},
                picture: {thumbnail: src},
                name: {first: name},
                gender,
                email,
            } = user;
            return {name, gender, email, lat, lng, id: i, image: <img src={src} />}
        })


        return (
            <section className={classes.margin}>
                <UsersTable rows={rows} columns={columns} />
            </section>
        )
    }

    return null
}

export { Users }