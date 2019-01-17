

let dragData = {
    userDiv: undefined,
    userDragBool: false,
    userBeginX: undefined,
    userBeginY: undefined,
    userDisplaceX: 0,
    userDisplaceY: 0,
    userInitMouseX: 0,
    userInitMouseY: 0
}

let listData = ['Squall', 'Zell', 'Quistis', 'Selphie', 'Irvine', 'Rinoa']

function createList() {
    listData.forEach( (el, ind) => {
        const newItem = document.createElement('div');
        newItem.classList.add('dadItem', `dadItem${ind}`);
        document.querySelector('.dadList').appendChild(newItem);

        const newItemData = document.createElement('div');
        newItemData.classList.add('dadContent');
        newItemData.innerHTML = el;
        newItem.appendChild(newItemData);

        newItemData.addEventListener('mousedown', () => itemHeld(newItemData, event))

        newItemData.addEventListener('mouseup', () => {
            itemLetGo();
        })
    });
}

function itemHeld(val, e) {
        dragData.userDragBool = true;
        dragData.userDiv = val;
        dragData.userBeginX = val.getBoundingClientRect().left;
        dragData.userBeginY = val.getBoundingClientRect().top;
        val.classList.add('posAb')
        dragData.userInitMouseX = e.clientX;
        dragData.userInitMouseY = e.clientY;
    
}

function moveItem(ob, ev) {
    if(ob.userDragBool) {
        console.log();
        ob.userDisplaceX = ev.clientX - dragData.userInitMouseX;
        ob.userDisplaceY = ev.clientY - dragData.userInitMouseY;
        ob.userDiv.style.transform = `translate(${ob.userDisplaceX}px, ${ob.userDisplaceY}px)`;
        // Check if mouse is inside horizontal margin of dadList
        if((ev.clientX >= document.querySelector('.dadList').getBoundingClientRect().left) &&
          (ev.clientX <= document.querySelector('.dadList').getBoundingClientRect().right)) {
            console.log('im inside')
            checkItemPos();
        }
    }
}

function checkItemPos() {
    
}

function itemLetGo() {
    if(dragData.userDragBool) {
        dragData.userDisplaceX = 0,
        dragData.userDisplaceY = 0,
        dragData.userInitMouseX = 0,
        dragData.userInitMouseY = 0
        dragData.userDiv.classList.remove('posAb')
        dragData.userDiv.style.transform = `translate(0px, 0px)`;
        dragData.userDragBool = false;
        dragData.userDiv = undefined;
        dragData.userBeginX = undefined;
        dragData.userBeginY = undefined;
        
    }  
    
}

function createEvListeners() {
    document.addEventListener('mouseup', () => {
        itemLetGo();
    })
    document.addEventListener('mousemove', (e) => {
        moveItem(dragData, e);
    })
};

(function initApp() {
    createList();
    createEvListeners();
})();