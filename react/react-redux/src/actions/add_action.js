export const  add=(name, email)=>{
  console.log("heloo",name);

  return {
    type: "ADD",
    payload: {userName: name, email: email}

    
  }
}
