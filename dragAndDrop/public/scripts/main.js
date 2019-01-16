

let dragData = {
    userDiv: undefined,
    userDragBool: false,
    userBeginX: undefined,
    userBeginY: undefined,
    userInitMouseX: undefined,
    userInitMouseY: undefined
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
        console.log(ob.userInitMouseX)
    }
}

function itemLetGo() {
    dragData.userDiv.classList.remove('posAb')
    dragData.userDragBool = false;
    dragData.userDiv = undefined;
    dragData.userBeginX = undefined;
    dragData.userBeginY = undefined;
    
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
    createEvListeners();
})();