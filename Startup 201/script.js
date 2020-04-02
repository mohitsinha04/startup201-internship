var attempt = 3;
//Below function executes on click of login button
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password == "password"){
        alert("Login Successfull");
        window.location = nextpage.html;
        return false;
    }
    else{
        attempt--;
        alert("You have left "+attempt+"  attempt;");
        
        if(attempt == 0){
            document.getElementById("username").disable = true;
            document.getElementById("password").disable = true;
            document.getElementById("submit").disable = true;
            return false;
        }
    }
}

function show(id) {
    var a = document.getElementById(id);
    if (a.type == "password") {
      a.type = "text";
  
    } else {
      a.type = "password";
  
    }
  }