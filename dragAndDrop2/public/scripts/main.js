
const listData = {
    itemHeld: false,
    selectedItem: '',
    selectedElement: '',
    initWords: ['Squall', 'Quistis', 'Seifer', 'Zell', 'Rinoa', 'Irvine'],
    list: [],
    //Puts elements in list
    putWordInList: function(arr) {
        arr.map((el, ind)=>{
            const newOb = {};
            newOb.name = el;
            newOb.pos = listData.list.length;
            newOb.moved = false;
            newOb.movedDir = 0;
            newOb.selected = {bool: false, dragX : 0, dragY: 0, initX: 0, initY: 0};
            listData.list.push(newOb);
            
        })
    },
    //Creates HTML on index page of list
    createHMTL: function(arr) {
        document.querySelector('.list-contain').innerHTML = '';

        //Create an array with all elements positioned by el.pos
        const newArr = [];
        arr.map((el, ind) => {
            newArr[el.pos] = el;
        })

        newArr.map((el)=> {
            const newEl = document.createElement('div');
            newEl.classList.add('dad-li');
            const newElInn = document.createElement('div');
            newElInn.classList.add('dad-li-inner');
            newElInn.innerText = el.name;
            newEl.appendChild(newElInn);
            document.querySelector('.list-contain').appendChild(newEl);
            newEl.addEventListener('mousedown', this.grabList);
            newEl.addEventListener('mouseup', this.letGoList);
        })
        console.log(newArr);
    },
    addItem: function(e, item, fromKeydown) {
        if(!fromKeydown || e.keyCode == 13) {
            const newArr = [];
            newArr.push(item.value);
            this.putWordInList(newArr);
            this.createHMTL(this.list);
            item.value = '';
        }
    },
    grabList: function(e) {
        listData.itemHeld = true;
        const siContainer = this.parentElement;
        listData.selectedElement = this;
        listData.selectedElement.classList.add('dad-li-inner-grab');
        this.style.zIndex = 100000;
        for(let i = 0; i < siContainer.children.length; i++){
            if(this == siContainer.children[i]){
                listData.list.map((el) => {
                    if(el.pos == i) {
                        el.selected.bool = true;
                        el.selected.initX = e.clientX;
                        el.selected.initY = e.clientY;
                        listData.selectedItem = el;
                        console.log(listData.selectedItem);
                    }
                })
                break;
            }
        }   
    },
    letGoList: function() {
        if(listData.itemHeld) {
            console.log('got here')
            listData.selectedElement.style.zIndex = 'auto';
            listData.dragLi(0, 0)
            listData.selectedElement.classList.remove('dad-li-inner-grab');
            listData.selectedElement.style.setProperty("transform", 'none');
            listData.itemHeld = false;
            listData.selectedItem.selected.bool = false;
            listData.selectedItem.selected.dragX = 0;
            listData.selectedItem.selected.dragY = 0;
            listData.selectedItem.selected.initX = 0;
            listData.selectedItem.selected.initY = 0;
            listData.selectedElement = '';
            console.log(listData.selectedItem);
            listData.selectedItem = '';
        }
    },
    moveLi: function(e) {
        if(this.itemHeld) {
            //console.log(listData.selectedItem);
            listData.selectedItem.selected.dragX = e.clientX - listData.selectedItem.selected.initX;
            listData.selectedItem.selected.dragY = e.clientY - listData.selectedItem.selected.initY;
            this.dragLi(listData.selectedItem.selected.dragX, listData.selectedItem.selected.dragY);
        }
    },
    dragLi: function(x, y) {
        listData.selectedElement.style.transform=`translate(${x}px,${y}px)`;
    }
};

//Runs on page load
(function initApp() {
    listData.putWordInList(listData.initWords);
    listData.createHMTL(listData.list);
})()