
function checkUserInput() {
    const userData = {
        username : document.querySelector('#cre-user__username').value,
        email : document.querySelector('#cre-user__email').value,
        password : document.querySelector('#cre-user__password').value,
        email2 : document.querySelector('#cre-user__email-2').value,
        password2 : document.querySelector('#cre-user__password-2').value
    }
    console.log(userData);
}


function sendUserInput() {
    
    
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