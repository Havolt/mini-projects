
function getData() {

}

function checkInput() {
    console.log('here');
}

function evtListeners() {
    document.querySelector('.inputButton').addEventListener('click', () => {
        checkInput();
    });
};

(function initApp() {
    evtListeners();
})()