import React from 'react';

// react router
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

// containers
import {
    Users,
    Profile,
    Dashboard,
} from '.';


const Routers = () => {
    return (
        <Switch>
            <Route exact path='/'  component={() => <Redirect to='profile' />} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
    );
};


export { Routers };