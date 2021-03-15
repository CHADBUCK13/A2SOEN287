function validateEmail(){
    //stores the value of the email input
    var inputEmail = document.getElementById("email").value;
   
    //output message element in the HTML
    var emailMsg = document.getElementById("emailMsg");
    
    //regex for checkign correct email values
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //outputs a message under the email box
    if(inputEmail == ""){
        emailMsg.innerText = "Please enter an email"
    }
    else if(!validEmail.test(inputEmail)){
        emailMsg.innerText = "Please enter a valid email"
    }
    else{
        emailMsg.innerText = ""
    }
    
}
function validatePWEmail(){
    //stores the value of the email input
    var inputEmail = document.getElementById("passwordEmail").value;
   
    //output message element in the HTML
    var emailMsg = document.getElementById("passwordEmailMsg");
    
    //regex for checkign correct email values
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //outputs a message under the email box
    if(inputEmail == ""){
        emailMsg.innerText = "Please enter an email"
    }
    else if(!validEmail.test(inputEmail)){
        emailMsg.innerText = "Please enter a valid email"
    }
    else{
        emailMsg.innerText = ""
    }   
}
function comparePasswords(){
    var password = document.getElementById("password").value;
    var confirmPW = document.getElementById("confirmPassword").value;
    var passwordMsg = document.getElementById("passwordMsg");
    if(password != confirmPW){
        passwordMsg.innerText = "Passwords do not match, please enter the same password"
    }
    else passwordMsg.innerText = "";
}
function compareNewPasswords(){
    var password = document.getElementById("newPassword").value;
    var confirmPW = document.getElementById("confirmNewPassword").value;
    var passwordMsg = document.getElementById("newPasswordMsg");
    if(password != confirmPW){
        passwordMsg.innerText = "Passwords do not match, please enter the same password"
    }
    else passwordMsg.innerText = "";
}
function compareEmails(){
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var emailMsg = document.getElementById("emailMsg");
    if(email != confirmEmail)
        emailMsg.innerText = "Emails do not match, please enter the same email."
}
function validateContactUsForm(){
    var emailMsg = document.getElementById("emailMsg")
    var inputEmail = document.getElementById("email").value;
    var orderNumberMsg = document.getElementById("orderNumberMsg")
    var orderNumber = document.getElementById("orderNumber").value;
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validOrderNumber = /[#]\d{5}[a-z]{2}/i
    if(inputEmail == ""){
        emailMsg.innerText = "Please enter an email"
    }
    else if(!validEmail.test(inputEmail)){
        emailMsg.innerText = "Please enter a valid email"
    }
    else{
        emailMsg.innerText = ""
    }

    if(orderNumber == ""){
        orderNumberMsg.innerText = "Please enter order number";
    }
    else if(!validOrderNumber.test(orderNumber)){
        orderNumberMsg.innerText = "Invalid order number";
    }
    else{
        orderNumberMsg.innerText = "";
    }
}
