import { connect } from 'react-redux';
import React, { Component } from 'react';
//import {add} from './store/store.js';
import { add } from '../actions/add_action.js';
import { bindActionCreators } from 'redux';


class Com2 extends Component {
constructor(props){
  super(props);
  this.state= {
    val1: "",
    val2: ""
  }
}
handleName =(e)=>{

this.setState({val1:e.target.value});
}

handleEmail =(e)=>{

this.setState({val2:e.target.value});
}


add=(e)=>{
 console.log(this.state)

}

render(){
  return(
<div>
   <div>
      <input type="text" name="username" value={this.state.val1} onChange={this.handleName} placeholder="user name" />

   </div><br/>
   <div>
      <input type="text" name="email" value={this.state.val2} onChange={this.handleEmail} placeholder="email" />

   </div><br/>


 <button onClick={(name)=>this.props.add(this.state.val1,this.state.val2)} >add</button>
</div>
  )
}

}

function mapStateToProps(state){
return {
   name:state.users
   }

}

function matchDispatchToProps(dispatch){
return  bindActionCreators({add: add}, dispatch);

}
export default connect(mapStateToProps,matchDispatchToProps)(Com2);
