import {createStore} from 'redux';
import  AllReducers  from '../reducers/allReducers.js'





/*const red1=( state = init, action ) => {

       return state
   }*/


const store=createStore(AllReducers);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
