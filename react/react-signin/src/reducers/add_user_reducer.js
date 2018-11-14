


const initState=[];


const add_User= (state=initState, action) => {

if(action.payload=="")
 return state;
 else {
   return [...state,action.payload];
 }


}



export default add_User;
