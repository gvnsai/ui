
const intState=[
  {userName:"Sai",email:"abc@xyz.com"},
  {userName:"Manikanta",email:"xyz@abc.com"},
  
]

  const userReducer=(state=intState,action)=>{
  switch (action.type) {
    case 'ADD':
       return [...state, action.payload]
    case 'REM':
       return { ...state };

    default:
       return state;

  }

}

/*export default function(){

return [
    {userName:"Sai",email:"abc@xyz.com"},
    {userName:"Manikanta",email:"xyz@abc.com"},

]

}*/
export default userReducer;
