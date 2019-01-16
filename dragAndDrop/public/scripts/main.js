

let dragData = {
    userHolding: undefined,
    userDragBool: false,
    userBeginX: undefined,
    userBeginY: undefined

}

function itemHeld(val) {
    dragData.userDragBool = true;
    dragData.userHolding = val;
}

function moveItem(ob) {
    if(ob.userDragBool) {
        console.log(ob.userHolding);
    }
}

function itemLetGo() {
    dragData.userDragBool = false;
    dragData.userHolding = undefined;
}

function createEvListeners() {
    document.addEventListener('mouseup', () => {
        itemLetGo();
    })
    document.addEventListener('mousemove', () => {
        moveItem(dragData);
    })
};

(function initApp() {
    createEvListeners();
})();