import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';

// material
import CircularProgress from '@material-ui/core/CircularProgress';

// action
import { getUserInit } from '../../store/users/action';

// components
import { ProfileView } from '../../components';

// classes
import classes from './Profile.module.scss';


const Profile = () => {
    const dispatch = useDispatch();
    const {
        user,
        loading,
        exist,
    } = useSelector((state) => state.usersReducer.singleUser);

    useEffect(() => {
        dispatch(getUserInit());
    },[]);


    let content = null;
    if (loading) {
        content = <div className={classes.center}><CircularProgress disableShrink /></div>
    }
    if (exist) {
        content = <ProfileView user={user} />
    }

    return (
        <section className={classes.profileMain}>
            <h2 className={classes.profileMain__title}>Profile</h2>
            {content}
        </section>
    )
}

export { Profile }