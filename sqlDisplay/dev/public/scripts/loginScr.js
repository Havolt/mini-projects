
function initEventListeners() {
    document.querySelector('.main__body__login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        checkUserTrue(
            document.querySelector('#main__body__login-form__username').value,
            document.querySelector('#main__body__login-form__password').value
        );
    })
}

function addLoginErrorEntryWrong(el, phrase) {
    console.log(el);
    el.classList.add('main__body__login-form__error');
    el.classList.add(`main__body__login-form__error-${phrase}`)
}

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

    }
}

(function initSignIn(){
    initEventListeners();
})()