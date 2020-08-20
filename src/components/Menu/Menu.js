import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';

// classes
import classes from './Menu.module.scss';


const Menu = () => {
    return (
        <AppBar position={'static'}>
            <header>
                <ul className={classes.ul}>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/users'>Users</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </header>
        </AppBar>

    )
}

export { Menu }