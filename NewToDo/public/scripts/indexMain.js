
const todoList = new Array();

function manipulateListHTML(arr) {
    document.querySelector('.listCon').innerHTML = '';
    todoList.map((el) => {
        const listMain = document.createElement('div');
        listMain.classList.add('todoItem');
        const listText = document.createElement('div');
        listText.innerHTML = el.todo;
        listText.classList.add('todoItemTodo')
        listMain.appendChild(listText);
        if(el.deadline) {
            const listDeadline = document.createElement('div');
            listDeadline.innerHTML = `${el.deadline.getDate()}/${el.deadline.getMonth()+1}/${el.deadline.getFullYear()}`;
            listDeadline.classList.add('todoItemDeadline')
            listMain.appendChild(listDeadline);
        }
        if(el.location) {
            const listLocation = document.createElement('div');
            listLocation.innerHTML = el.location;
            listLocation.classList.add('todoItemLocation')
            listMain.appendChild(listLocation);
        }
        document.querySelector('.listCon').appendChild(listMain);
    })
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
    for(let i = 0; i < document.querySelectorAll('.inputGen').length; i++) {
        document.querySelectorAll('.inputGen')[i].addEventListener('keydown', (e) => {
            if(e.keyCode == 13) {
                checkInput(
                    document.querySelector('.inputEvent').value,
                    document.querySelector('.inputDeadline').value,
                    document.querySelector('.inputLocation').value
                );
            }
        });
    }
};

(function initApp() {
    evtListeners();
})()