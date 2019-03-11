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
    console.log(nameOrEmail, password);
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
        console.log(data);
    })
    .catch(err => console.log(err))
}

//initializing page
(function initSignIn(){
    initEventListeners();
})()