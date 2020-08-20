import React from 'react';

// material
import Card from '@material-ui/core/Card';

// components
import {
    EditForm,
    User,
} from '.'

// classes
import classes from './ProfileView.module.scss';


const ProfileView = (props) => {
    const {user} = props;

    return (
        <div className={classes.profileContainer}>
            <Card className={classes.profileContainer__card}>
                <User user={user} />
            </Card>

            <Card style={{width: 75+'%'}} className={classes.profileContainer__card}>
                <h4 className={classes.profileContainer__card__title}>Edit Profile</h4>
                <EditForm user={user} />
            </Card>
        </div>
    )
}


export { ProfileView }