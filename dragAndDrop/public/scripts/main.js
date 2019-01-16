

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
        
        dragData.initMouseX = e.clientX;
        dragData.initMouseY = e.clientY;

        console.log(dragData.userInitMouseX, dragData.userInitMouseY);
    
}

function moveItem(ob, ev) {
    
    if(ob.userDragBool) {
        console.log(ev.client)
        //ob.userDiv.style.transform = `translateX(${ob.userInitMouseX + ev.clientX})`
        //ob.userDiv.style.transform = `translateY(${ob.userInitMouseY + ev.clientY})`
        ob.userDiv.style.top = `${ob.userInitMouseY + ev.clientY}px`;
        ob.userDiv.style.left = `${ob.userInitMouseX + ev.clientX}px`;
        
        
    }
}

function itemLetGo() {
    if(dragData.userDragBool) {
        dragData.userDiv.classList.remove('posAb')
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