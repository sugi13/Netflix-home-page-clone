const SubmitButton = document.querySelector('#submit');
const EmailField = document.querySelector("#input-field");
const PasswordField = document.querySelector("#password-field");


const ErrorField = document.querySelector('#error');
const Passworderror = document.querySelector('#password-error');


SubmitButton.addEventListener('click', function(){
    if(!ErrorField.value){
        ErrorField.innerHTML = "Please enter valid email address or phone number";
        if(PasswordField.value === ''){
            Passworderror.innerHTML = "Your password must contain between 4 and 60 characters";
        }
    }
    
});

