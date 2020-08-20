// redux
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

// Reducers
import { usersReducer } from './users/reducer';

// sagas
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    usersReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchSaga);