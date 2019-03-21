
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

    if(newStory.author == '' || newStory.userId == '') {
        alert('You have been logged out, please log in and try again');
        checkUserLoggedIn();
    }
    else {
        ///Add fetch here
        fetch('/user-submit-story', {
            method: 'POST',
            body: JSON.stringify(newStory), 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }


    


};

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
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
    if(!checkUsername || !checkId) {
        document.querySelector('.main__body').innerHTML = '';
        document.querySelector('.main__body').classList.add('main__body--ignore');
        document.querySelector('.main__body__login-warn').classList.remove('hidden');
        console.log('deleted');
    }

}

(function initSubmit(){
    addSubmitEvtLstnrs();
    checkUserLoggedIn();
})()