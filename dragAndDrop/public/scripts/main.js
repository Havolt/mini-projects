

let dragData = {
    userHolding: undefined,
    userDragBool: false
}

function itemHeld(val) {
    dragData.userDragBool = true;
    dragData.userHolding = val;
}

function itemLetGo() {
    dragData.userDragBool = false;
    dragData.userHolding = undefined;
}

function createEvListeners() {
    document.addEventListener('mouseup', () => {
        itemLetGo();
    })
};

(function initApp() {
    createEvListeners();
})();