
import { configureStore } from '@reduxjs/toolkit';
import {combineReducers, createStore} from 'redux';
import countReducer from './reducers/countReducer';




export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({reducer:{count: countReducer}})


