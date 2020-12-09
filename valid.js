function validate(redirect){
    var user = document.getElementById("username");
    var password = document.getElementById("password");
    if(user.value=="admin" && password.value=="12345"){
        redirect();
    }
    else{
        alert("please enter valid username & password");
    }
}
function redirect(){
    location.href="mainpage.html";
}