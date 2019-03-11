
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
    el.classList.add('main__body__login-form__error');
}

function checkUserTrue(nameOrEmail, password) {
    console.log(nameOrEmail, password);
    if(nameOrEmail.length < 3) {
        addLoginErrorEntryWrong(
            document.querySelector('#main__body__login-form__username'),
            'Username or email'
        );
    }
    if(password.length < 3) {
        addLoginErrorEntryWrong(
            document.querySelector('#main__body__login-form__email'),
            'Password'
        );
    }
    else {

    }
}

(function initSignIn(){
    initEventListeners();
})()