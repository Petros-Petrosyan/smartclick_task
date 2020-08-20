import React from 'react';

// classes
import classes from './User.module.scss';


const User = (props) => {
    const {
        user: {
            firstName,
            lastName,
            email,
            src,
        }
    } = props;

    return (
        <div className={classes.userContainer}>
            <img
                className={classes.userContainer__img}
                src={src}
            />
            <p className={classes.userContainer__name}>{firstName} {lastName}</p>
            <p>Email: {email}</p>
        </div>
    )
}


export { User }