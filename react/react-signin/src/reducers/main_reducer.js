import {combineReducers} from 'redux';
import add_User from '../reducers/add_user_reducer.js';
import { createStore } from 'redux';

const mainReducer= combineReducers(
  {
    add_user: add_User
  }
);

const store=createStore(mainReducer);

store.subscribe(() => {
  console.log(store.getState());
});
export default store;
