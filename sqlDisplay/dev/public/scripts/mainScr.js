
function headerLogin(cookie) {
    //console.log(cookie);
    if(cookie){
        const findSid = /(?:name=)+[^,;]*/g;
        const cookieUsername = document.cookie.match(findSid)[0].split('').splice(5).join('');
        document.querySelector('.main__head__user__name').innerHTML=cookieUsername;
    }
}


(function initMain() {
    headerLogin(document.cookie);
})();