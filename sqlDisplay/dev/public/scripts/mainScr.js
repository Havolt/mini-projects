
function headerLogin(cookie) {
    console.log(cookie);
    const findSid = /(?:name=)+[^,;]*/g;
    const cookieUsername = document.cookie.match(findSid)[0].split('').splice(5).join('');
    console.log(cookieUsername);
    
    document.querySelector('.main__head__user__name').innerHTML=cookieUsername;
}


(function initMain() {
    headerLogin(document.cookie);
})();