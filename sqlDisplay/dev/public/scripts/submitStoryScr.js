
function addSubmitEvtLstnrs() {
    document.querySelector('.main__body__submit__sub__post__button').addEventListener('click', (e) => {
        e.preventDefault();
        checkStory(
            document.querySelector('.main__body__submit__title__inp').value,
            document.querySelector('.main__body__submit__text__inp').value,
            document.querySelector('.main__body__submit__genre__inp').value,
        );
    })
    document.querySelector('.main__body__submit__title__inp').addEventListener('focus', () => {
        document.querySelector('.main__body__submit__title').classList.remove('main__body__submit__title--err');
    })
    document.querySelector('.main__body__submit__text__inp').addEventListener('focus', () => {
        document.querySelector('.main__body__submit__text').classList.remove('main__body__submit__text--err');
    })
}

function checkStory(title, body, genre) {

    const failCheck = {
        title: true,
        body: true
    }

    if(title.length < 3) {
        failCheck.title = true;
    }
    else {
        title.split('').forEach(el => {
            if(el != ' ') {
                failCheck.title = false;
            }
        });
    }
    if(body.length < 50) {
        failCheck.body = true;
    }
    else {
        for(let i = 0; i < body.split('').length; i++) {
            if(body.split('')[i] != ' ' && 
            body.split('')[i] != '\r' && 
            body.split('')[i] != '\n' ) {
                failCheck.body = false;
                break;
            }
        }
    }

    if(failCheck.title || failCheck.body) {
        storyShortWarn(failCheck.title, failCheck.body);
    }
    else {
        createStory(title, body, genre);
    }
}

function storyShortWarn(titleShort, bodyShort) {
    
    if(titleShort) {
        document.querySelector('.main__body__submit__title').classList.add(
            'main__body__submit__title--err'
        )
    }
    if(bodyShort) {
        document.querySelector('.main__body__submit__text').classList.add(
            'main__body__submit__text--err'
        )
    }

};

function createStory(title, body, genre) {
    const newStory = {
        title,
        body,
        genre
    }

    newStory.author = getCookie('name');
    newStory.userId = getCookie('userId');

    console.log(newStory);

    ///Add fetch here

};

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";

}


function checkUserLoggedIn() {
    const checkUsername = getCookie('name');
    const checkId = getCookie('userId');

    console.log(checkUsername, checkId);
    if(!checkUsername || !checkId) {
        document.querySelector('.main__body').innerHTML = '';
    }
}

(function initSubmit(){
    addSubmitEvtLstnrs();
    checkUserLoggedIn();
})()