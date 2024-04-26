document.getElementById('button').addEventListener('click', function(){

    const inputEmail = document.getElementById('email');
    const emailText = inputEmail.value;
    console.log(emailText);
    
    if(emailText !== '' && !emailText.includes('@')){
        inputEmail.style.backgroundColor = 'red';
        inputEmail.style.marginLeft = '35px';
        inputEmail.style.transition = '1s';
    }
    else if(emailText !== '' && emailText.includes('@')){
        inputEmail.style.backgroundColor = 'white';
        inputEmail.style.marginLeft = '0px';
        inputEmail.style.transition = '0s';
    }

    const number = document.getElementById('number');
    const numberString = number.value;

    if(numberString !== number){
        number.style.backgroundColor = 'red';
        number.style.marginLeft = '30px';
        number.style.transition = '1s';
    }

    
    const password = document.getElementById('password');
    const passwordString = password.value;
    const confirmPassword = document.getElementById('c-password');
    const confirmPasswordString = confirmPassword.value;

    if(passwordString !== confirmPasswordString){
        confirmPassword.style.backgroundColor = 'red';
        confirmPassword.style.transition = '1s';
    }
    else if(passwordString == confirmPasswordString){
        confirmPassword.style.backgroundColor = 'white';
        confirmPassword.style.transition = '0';
    }

})




    