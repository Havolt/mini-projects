

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
        console.log(ev.clientX, dragData.userInitMouseX,ob.userDisplaceX)
        ob.userDisplaceX = ev.clientX - dragData.userInitMouseX;
        ob.userDisplaceY = ev.clientY - dragData.userInitMouseY;
        ob.userDiv.style.transform = `translate(${ob.userDisplaceX}px, ${ob.userDisplaceY}px)`;
        
        
    }
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
    createEvListeners();
})();