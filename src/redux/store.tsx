
import { configureStore } from '@reduxjs/toolkit';
import {combineReducers, createStore} from 'redux';
import countReducer from './reducers/countReducer';
import getIdReducer from './reducers/getIdReducer';
import searchReducer from './reducers/searchReducer';




export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer:
    {
        count:countReducer, 
        search:searchReducer,
        id: getIdReducer,
    }})


