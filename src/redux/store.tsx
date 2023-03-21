
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import {combineReducers, createStore} from 'redux';
import cartReducer from './reducers/cartReducer';
import countReducer from './reducers/countReducer';
import getIdReducer from './reducers/getIdReducer';
import searchReducer from './reducers/searchReducer';
import rootSaga from './rootSaga';
import fetchReducer from './reducers/fetchReducer';

const sagaMiddleware = createSagaMiddleware()
const customizedMiddleware =  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
}).concat(sagaMiddleware)
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer:
    {
        count:countReducer, 
        search:searchReducer,
        id: getIdReducer,
        cart: cartReducer,
        fetchData: fetchReducer
    },
    middleware: customizedMiddleware,
})

sagaMiddleware.run(rootSaga)


