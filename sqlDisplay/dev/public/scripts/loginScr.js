//add event listeners on load of page
function initEventListeners() {
    document.querySelector('.main__body__login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        checkUserTrue(
            document.querySelector('#main__body__login-form__username').value,
            document.querySelector('#main__body__login-form__password').value
        );
    })
    document.querySelectorAll('.main__body__login-form__txt-inp').forEach(el => {
        el.addEventListener('input', (e) => {
            el.parentElement.classList.remove('main__body__login-form__error');
        })
    });
}

//Display classes that warn user of shot inputs
function addLoginErrorEntryWrong(el, phrase) {
    el.classList.add('main__body__login-form__error');
    el.classList.add(`main__body__login-form__error-${phrase}`)
}

//Check if email/username and password are long enough
function checkUserTrue(nameOrEmail, password) {
    //console.log(nameOrEmail, password);
    if(nameOrEmail.length < 3) {
        addLoginErrorEntryWrong(
            document.querySelectorAll('.main__body__login-form__inp-con')[0],
            'username'
        );
    }
    if(password.length < 3) {
        addLoginErrorEntryWrong(
            document.querySelectorAll('.main__body__login-form__inp-con')[1],
            'password'
        );
    }
    else {
        const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(nameOrEmail);
        sendUserCheck(nameOrEmail, password, isEmail);
    }
}

//Send user check to server
function sendUserCheck(name, password, isEmail) {

    fetch('/user-log-in',
        {
            method: 'POST',
            body: JSON.stringify({name, password, isEmail}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(res => res.json())
    .then(data => {
        if(data.err) {
            alert(data.err)
        } else {
            createLoginCookie(data.sessionId);
        }
    })
    .catch(err => console.log(err))
}

//Creates login cookie for user and supplies username to cookie
function createLoginCookie(sess) {
    // Date.prototype.addMinutes = function(m) {    
    //     this.setTime(this.getTime() + (0*m*60*1000)); 
    //     return this;   
    // }
    const newExpirey  = new Date().setTime(new Date().getTime() + (1 * 60 * 1000));
    document.cookie=`sessionId=${sess.sid};`;
    document.cookie=`name=${sess.name};`;
    document.cookie=`expires=${newExpirey};`;
    document.cookie=`path=/;`;
    
    //console.log(document.cookie);
    //console.log(newExpirey);
}

//initializing page
(function initSignIn(){
    initEventListeners();
})()