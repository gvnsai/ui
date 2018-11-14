import React from 'react';
import {connect} from 'react-redux';


function com1(props){
return(
<div>
   {list(props.name)}
</div>)

}
const list=(names)=>{
  return names.map((name)=>{
    return(
      <div key={name.userName}><div>
        <span >Username: {name.userName}</span>
      </div>
      <div>
        <span >Email: {name.email}</span>
      </div>
      <br/></div>
    );
  })
}
function mapStateToProps(state){
return {
   name:state.users
   }

}
export default connect(mapStateToProps)(com1);
