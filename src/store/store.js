import reducers from './reducers';
import { applyMiddleware, createStore } from 'redux';

import sagas from './sagas';
import createSagaMiddleware from 'redux-saga';

import { getLocalStorageState, setLocalStorageState } from './localStorage';

const sagaMiddleware = createSagaMiddleware();

const initialState = getLocalStorageState();

const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));

store.subscribe(() => {
    setLocalStorageState({
        firstName: store.getState().firstName,
        lastName: store.getState().lastName,
    });
});

sagaMiddleware.run(sagas);

export default store;
