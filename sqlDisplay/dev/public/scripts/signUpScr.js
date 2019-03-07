
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
        if(!passSame && !emailSame) {
            valuesDifferent({
                el: document.querySelector('.cre-user__collection-1-pass'), 
                warnClass: 'cre-user__password-not-same'
            },
            {
                el: document.querySelector('.cre-user__collection-1-email'),
                warnClass: 'cre-user__email-not-same'
            });
        }
        else if(!passSame) {
            valuesDifferent({
                el: document.querySelector('.cre-user__collection-1-pass'), 
                warnClass: 'cre-user__password-not-same'
            });
        }
        else if(!emailSame) {
            valuesDifferent({
                el: document.querySelector('.cre-user__collection-1-email'),
                warnClass: 'cre-user__email-not-same'
            });
        }
        
    }
    
}

function valuesDifferent(ob1, ob2) {
    for(let i = 0; i < arguments.length; i++) {
        arguments[i].el.classList.add('cre-user__not-same');
        arguments[i].el.classList.add(arguments[i].warnClass);
    }
}




function sendUserInput(data) {
    console.log(data)
    fetch('/create-profile', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((res) => {
        //If response is name tell user name taken
        if(res == 'name') {
            alertUserTaken('That username is taken');
        } else if(res == 'email') {
            alertUserTaken('Email already in use');
        } else {
            accountSuccess()
        }
    })
    .catch(err => console.log(err));
}

function alertUserTaken(warn) {
    alert(warn);
}

function accountSuccess() {
    document.body.innerHTML = 'Account Successfully Created! Redirecting...';
    setTimeout(()=>{
        window.open('/', __self);
    },600)
}



function evtListners() {
    document.querySelector('.cre-user__submit').addEventListener('click', (e) => {
        e.preventDefault();
        checkUserInput();
    })
    document.querySelector('#cre-user__password').addEventListener('input', (e) => {
        e.srcElement.parentElement.classList.remove('cre-user__not-same');
        e.srcElement.parentElement.classList.remove('cre-user__password-not-same');
    })
    document.querySelector('#cre-user__email').addEventListener('input', (e) => {
        e.srcElement.parentElement.classList.remove('cre-user__not-same');
        e.srcElement.parentElement.classList.remove('cre-user__email-not-same');
    })
}

(function initApp(){
    evtListners();
})()