 let fname=document.forms["mail"]["fname"];
   let lname=document.forms["mail"]["lname"];
   let uname=document.forms["mail"]["email"];
   let pass=document.forms["mail"]["pwd"];
   let cpass=document.forms["mail"]["cpwd"];

        function val(){

            if(fname.value=="")
            {
                  fname.style.borderBottom="2px solid red";
                  fname.focus();
                  document.getElementById("err1").style.visibility="visible";
                  return false;
             }
                
             if(lname.value==""){
                 lname.style.borderBottom="2px solid red";
                 lname.focus();
                 document.getElementById("err2").style.visibility="visible";
                  return false;
         
                }
              if(uname.value==""){
                 uname.style.borderBottom="2px solid red";
                 uname.focus();
                 document.getElementById("err3").style.visibility="visible";
                  return false;
         
                }
              if(pass.value==""){
                 pass.style.borderBottom="2px solid red";
                 pass.focus();
                 document.getElementById("err4").style.visibility="visible";
                  return false;
         
                }
              if(cpass.value==""){
                 cpass.style.borderBottom="2px solid red";
                 cpass.focus();
                 document.getElementById("err5").style.visibility="visible";
                  return false;
         
                }
          
        
     }

  function fmat(){
                     if( /^[a-zA-Z]*$/.test(fname.value))
                     {  
                        fname.style.borderBottom="2px solid blue";
                        document.getElementById("err1").style.visibility="hidden";
                        return false;
                     }
                   document.getElementById("err1").style.visibility="visible";
                    return false;    
               } 
function lmat(){
                     if( /^[a-zA-Z]*$/.test(lname.value))
                     {  
                        lname.style.borderBottom="2px solid blue";
                        document.getElementById("err2").style.visibility="hidden";
                        return false;
                     }
                   document.getElementById("err2").style.visibility="visible";
                   
                    return false;    
               }   
function umat(){
                     if( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(uname.value))
                     {  
                        uname.style.borderBottom="2px solid blue";
                        document.getElementById("err3").style.visibility="hidden";
                        return false;
                     }
                   document.getElementById("err3").style.visibility="visible";
                   
                    return false;    
               } 

function pmat(){
                     if( /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pass.value))
                     {  
                        pass.style.borderBottom="2px solid blue";
                        document.getElementById("err4").style.visibility="hidden";
                        return false;
                     }
                   document.getElementById("err4").style.visibility="visible";
                   
                    return false;    
               } 
function cpmat(){
                     if(pass.value==cpass.value )
                     {  
                        cpass.style.borderBottom="2px solid blue";
                        document.getElementById("err5").style.visibility="hidden";
                        return false;
                     }
                   document.getElementById("err5").innerText="must match with password";
                   document.getElementById("err5").style.visibility="visible";
                  
                   
                    return false;    
               } 
     
    
 
