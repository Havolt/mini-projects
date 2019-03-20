
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

    console.log(title, body, genre)
}

(function initSubmit(){
    addSubmitEvtLstnrs();
})()