document.querySelector('.btn').addEventListener('submit',insert);

document.getElementById('email').addEventListener('blur', validateEmail )

document.querySelector('.telephone').addEventListener('focus',validateNumonFocus);

document.querySelector('.telephone').addEventListener('blur' , validateNumber);

let msgEmail = document.getElementById('errorEmail');

let emailInput = document.getElementById('email');

let mobInput = document.querySelector('.mob');

let msgMobile = document.getElementById('errorTel');

let mobDiv = document.querySelector('.mob');

function insert(e){
    
    if(validateNumber && validateEmail){
        window.location.href="http://127.0.0.1:5500/page/welcome.html";
    }
    e.preventDefault();

}

function validateNumber(e){
   
    let mobNumber = e.target.value;
    // console.log(typeof(mobNumber));
    if(mobNumber.length<1){
    msgMobile.innerText = 'Your mobile Number length Too small';
    msgMobile.style.color ='red';
    mobDiv.style.border = '2px solid red';
    mobInput.focus();
    return false;
    }else if(mobNumber.length>10){
    msgMobile.innerText = 'Your mobile Number length Too Large';
    msgMobile.style.color ='red';
    mobDiv.style.border = '2px solid red';
    return false;
    }else if(mobNumber.length===10){
        mobDiv.style.border = '2px solid green';
        msgMobile.innerText ='';
        return true;
    }
}

function validateNumonFocus(e){
    if(emailInput.value === ''){
        emailInput.focus();
        emailInput.style.borderColor ='red';
        validateEmail(e);
    }else{
        validateNumber(e);
    }
}

function validateEmail(e){
 let email = e.target.value;

 if(email.length <4 && email.length>1){
    msgEmail.innerText = "This is Too short Email";
    msgEmail.style.color = 'red';
    msgEmail.style.fontWeight ='600';
    emailInput.style.marginBottom  = "0px";
    emailInput.style.borderColor ='red';
    emailInput.focus();
    return false;
 }else if(email.length > 30){
    msgEmail.innerText = "This is Too Long Email";
    msgEmail.style.color = 'red';
    msgEmail.style.fontWeight ='600';
    emailInput.style.marginBottom  = "0px";
    emailInput.style.borderColor ='red';
    emailInput.focus();
    return false;
 }else if(emailInput.value === ""){
    msgEmail.innerText = "Please Enter your email first";
    msgEmail.style.color = 'red';
    msgEmail.style.fontWeight ='600';
    emailInput.style.marginBottom  = "0px";
    emailInput.style.borderColor ='red';
    emailInput.focus();
    return false;
 }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
 .test(emailInput.value)){
    msgEmail.innerText='Pls Enter Your Email properly';
    msgEmail.style.color='red'; 
    // emailInput.style.borderColor ='red';
    emailInput.focus();
    return false;
    
}else{
    msgEmail.style.display='block';
    emailInput.style.borderColor = 'green';
    msgEmail.innerText ='';
    return true;
}
}
// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// 
// /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g