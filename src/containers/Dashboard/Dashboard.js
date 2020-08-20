import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// material
import CircularProgress from '@material-ui/core/CircularProgress';

// action
import { getUsersInit } from '../../store/users/action';

// classes
import classes from './Dashboard.module.scss';


const Dashboard = () => {
    const dispatch = useDispatch();
    const {
        users,
        loading,
        exist,
    } = useSelector((state) => state.usersReducer.usersList);

    useEffect(() => {
        dispatch(getUsersInit(1500));
    },[]);


    if (loading) {
       return (
           <div className={classes.center}>
               <CircularProgress disableShrink />
           </div>
       )
    }
    if (exist) {
        const data = users.map((user) => user.registered.age);
        const options = {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Registered user count'
            },
            series: [{
                data,
            }]
        }

        return (
            <div>
                <HighchartsReact
                    options = { options }
                    highcharts = { Highcharts }
                />
            </div>
        )
    }
    return null
}

export { Dashboard }