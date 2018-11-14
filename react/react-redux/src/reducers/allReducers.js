import {combineReducers} from 'redux';
import  userReducer  from '../reducers/userReducer.js';


 const AllReducers=combineReducers({
  users: userReducer
})

export default AllReducers;
