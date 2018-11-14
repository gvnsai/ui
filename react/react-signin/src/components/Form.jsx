import './Form.css';
import React from 'react';
import { connect } from 'react-redux';
import { add_User } from '../actions/add_user.js';
import { bindActionCreators } from 'redux';


class From1 extends React.Component{

constructor(props) {
  super(props);

this.state = { email: '',
               error_msg: ''


     };
 }

 onInputChange(email) {
  this.setState({email});
  this.setState({error_msg:""})
 }
val=(e)=>{
  e.preventDefault();
   let email=this.state.email;

    if(email===""){
        this.setState({error_msg:'Please enter valid Email Id..'});

    return false;

  }
  else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
  {
    alert("Form submitted ")
    return (true);
  }
  else {
    this.setState({error_msg:'Please enter valid Email Id like "abc@domain.com" '});
    return false;
  }
}


render(){

  return (
   <form name="login" action="#" method="get" onSubmit={this.val}>
        <div>

            <input id="mailid" type="text" value={this.state.email} onChange={event => this.onInputChange(event.target.value)}/>
            <label htmlFor="mailid">Email or phone </label>
         </div>
<div>
        <p className="alr">{this.state.error_msg}</p>
</div>
        <div>
         <a className="link" href="/">forgot email?</a>
        </div>

        <div className="com" >
         <span ><p>Not your computer? Use a Private Window to sign in.</p>
         <a className="link" href="">Learn More</a></span>
        </div>

         <div className="btn">
            <a className="link" href="">Create Account</a>
            <input type="submit" value="Next" onClick={ () => this.props.add(this.state.email)}/>
          </div>

       </form>

);

}


}


function mapStateToProps(state){
  return {

     name:state.add_user,

  }
}

function mapDispatchToProps(dispatch){
return  bindActionCreators({add: add_User}, dispatch);

}

/*let input=document.forms["login"]["mailid"];




    function val(){

                             if(input.value=="")
                             {
                              input.style.borderBottom="2px solid red";
                              input.focus();
                              document.getElementById("alr").style.visibility="visible";
                              return false;
                             }

                            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value))
                            {
                              return (true);
                            }

                           document.getElementById("alr").style.visibility="visible";
                            return false;

                  }

 function remerr(){
       input.style.borderBottom="2px solid #4286f4";
       document.getElementById("alr").style.visibility="hidden";
        return false;
    }*/


export default connect(mapStateToProps,mapDispatchToProps)(From1);
