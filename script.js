
function loginfunction(){
    var mail = document.getElementById("usermail").value;
    var userpassword  = document.getElementById("userpassword").value;
    var regx =  /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    var adminmail = "admin@admin.com";
    var adminpassword = "123456";
    
    if(adminmail.match(mail) && adminpassword.match(userpassword)){
        alert("login successful")
        
    }
   
    else{
        alert("Please enter valid email address and password")
        return false;
    }

}



