
const todoList = new Array();

function manipulateListHTML(arr) {
    console.log(arr);
}

function clearInput() {
    document.querySelector('.inputEvent').value = '';
    document.querySelector('.inputDeadline').value = '';
    document.querySelector('.inputLocation').value = '';
}

function checkInput(todo, deadline, location) {
    
    if(todo) {
        const newDeadline = new Date(deadline);
        const newObj = {};
        newObj.todo = todo;
        if(!isNaN(newDeadline.getDate()) ) {
            newObj.deadline = newDeadline;
        }
        if(location) {
            newObj.location = location;
        }
        todoList.push(newObj);
        todo = ''
        manipulateListHTML(todoList);
        clearInput();
    }
}

function evtListeners() {
    document.querySelector('.inputButton').addEventListener('click', () => {
        checkInput(
            document.querySelector('.inputEvent').value,
            document.querySelector('.inputDeadline').value,
            document.querySelector('.inputLocation').value
            );
    });
};

(function initApp() {
    evtListeners();
})()