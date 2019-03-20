
function addSubmitEvtLstnrs() {
    document.querySelector('.main__body__submit__sub__post__button').addEventListener('click', (e) => {
        e.preventDefault();
        checkStory(
            document.querySelector('.main__body__submit__title__inp').value,
            document.querySelector('.main__body__submit__text__inp').value,
            document.querySelector('.main__body__submit__genre__inp').value,
        );
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
}

function storyShortWarn(titleShort, bodyShort) {
    console.log(titleShort, 'title too short');
    console.log(bodyShort, 'body too short');
};

(function initSubmit(){
    addSubmitEvtLstnrs();
})()