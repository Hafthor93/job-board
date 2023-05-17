import React from 'react';
import { combineReducers } from 'redux';
import jobReducer from '../redux/reducers/jobReducer';
import { addJobAction } from '../redux/actions/addJobAction';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';



const store = configureStore({
    reducer: {
      jobs: jobReducer,
      
    },
    middleware: [thunkMiddleware]
  });
  
  export default store;

  