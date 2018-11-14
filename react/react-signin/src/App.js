import React, { Component } from 'react';
import logo from './logo.png';
import "./App.css";
import Form1 from './components/Form.jsx';
import store from './reducers/main_reducer.js';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="box">
        <div className="head">
            <img className="google" src={logo} alt=""/>
            <p className="text" style={{fontSize:26}} >Sign In</p>
            <p className="text">to continue to Gmail</p>
            <Form1 />
        </div>


      </div>
      </Provider>
    );
  }
}







export default App;
