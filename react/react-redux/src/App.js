import React, { Component } from 'react';
import './App.css';
import Com1 from './components/Com1.js'
import store from './store/store.js';
//import Com2 from './components/Com2.js';
import { Provider } from 'react-redux';
import { BasicExample } from './routes/menu.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div >
           <BasicExample store={store}/>
        </div>


       <Com1 store={store}/>

      </div>
      </Provider>
    );
  }
}

export default App;
