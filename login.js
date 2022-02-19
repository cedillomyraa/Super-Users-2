function login(){
    console.log("Executing login function....");

    //get the values from the input username and password
    //med. getting value compare values with email and password in LS
}
function initLogin(){
    console.log("Loging script");
    //hook event
    $("#btnLogin").click(login);
}

window.onload=initLogin;//execute 