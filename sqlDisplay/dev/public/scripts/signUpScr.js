
function checkUserInput() {
    let passSame = false;
    let emailSame = false;
    const userData = {
        username : document.querySelector('#cre-user__username').value,
        email : document.querySelector('#cre-user__email').value,
        password : document.querySelector('#cre-user__password').value,
        email2 : document.querySelector('#cre-user__email-2').value,
        password2 : document.querySelector('#cre-user__password-2').value
    }
    
    if(userData.email === userData.email2) {
        emailSame = true;
    }
    if(userData.password === userData.password2) {
        passSame = true;
    }

    if(passSame && emailSame) {
        sendUserInput(userData);
    }else {
        if(passSame) {
            valuesDifferent({
                el: document.querySelector('#cre-user__password'), 
                warn: 'Passwords do not match!'
            });
        }
        else if(emailSame) {
            valuesDifferent({
                el: document.querySelector('#cre-user__email'),
                warn: 'Emails do not match!'
            });
        }
        else {
            valuesDifferent({
                el: document.querySelector('#cre-user__password'), 
                warn: 'Passwords do not match!'
            },
            {
                el: document.querySelector('#cre-user__email'),
                warn: 'Emails do not match!'
            });
        }
    }
    
}

function valuesDifferent(ob1, ob2) {
    console.log(arguments);
}


function sendUserInput(data) {
    console.log(data)
}

function evtListners() {
    document.querySelector('.cre-user__submit').addEventListener('click', (e) => {
        e.preventDefault();
        checkUserInput();
    })
}

(function initApp(){
    evtListners();
})()