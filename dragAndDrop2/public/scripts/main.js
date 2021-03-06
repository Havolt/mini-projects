
const listData = {
    dragDistance: 60,
    containDivData : document.querySelector('.list-contain').getBoundingClientRect(),
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
    createHTML: function(arr) {
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
            this.createHTML(this.list);
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
                        el.selected.initX = e.clientX - listData.containDivData.left;
                        el.selected.initY = e.clientY - listData.containDivData.top;
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
            //Change styling
            console.log('got here')
            listData.selectedElement.style.zIndex = 'auto';
            listData.dragLi(0, 0)
            listData.selectedElement.classList.remove('dad-li-inner-grab');
            listData.selectedElement.style.setProperty("transform", 'none');

            //Change positions
            if((listData.selectedItem.selected.dragY / listData.dragDistance) >= 1) {
                //console.log(Math.floor(listData.selectedItem.selected.dragY / listData.dragDistance))
                for(let i = 0; i < listData.list.length; i++) {
                    if(listData.list[i].movedDir == -1) {
                        console.log('yush')
                        listData.list[i].pos--;
                    }
                }
                listData.selectedItem.pos += Math.floor(listData.selectedItem.selected.dragY/listData.dragDistance)
                listData.createHTML(listData.list);
            }
            else if((listData.selectedItem.selected.dragY / listData.dragDistance) <= -1) {
                for(let i = 0; i < listData.list.length; i++) {
                    if(listData.list[i].movedDir == 1) {
                        console.log('yush')
                        listData.list[i].pos++;
                    }
                }
                listData.selectedItem.pos += Math.ceil(listData.selectedItem.selected.dragY/listData.dragDistance)
                //console.log(Math.ceil(listData.selectedItem.selected.dragY / listData.dragDistance))
                listData.createHTML(listData.list);
            }

            //Revert all changes
            listData.itemHeld = false;
            listData.selectedItem.selected.bool = false;
            listData.selectedItem.selected.dragX = 0;
            listData.selectedItem.selected.dragY = 0;
            listData.selectedItem.selected.initX = 0;
            listData.selectedItem.selected.initY = 0;
            listData.selectedElement = '';

            listData.selectedItem = '';
            listData.list.map((el) => {
                el.movedDir = 0;
            })
        }
    },
    moveLi: function(e) {
        if(this.itemHeld) {
            //console.log(listData.selectedItem);
            listData.selectedItem.selected.dragX = (e.clientX - listData.containDivData.left) - listData.selectedItem.selected.initX;
            listData.selectedItem.selected.dragY = (e.clientY - listData.containDivData.top) - listData.selectedItem.selected.initY;
            this.dragLi(listData.selectedItem.selected.dragX, listData.selectedItem.selected.dragY);
            this.checkPositions(listData.selectedItem.selected.dragX, listData.selectedItem.selected.dragY);
        }
    },
    dragLi: function(x, y) {
        listData.selectedElement.style.transform=`translate(${x}px,${y}px)`;
    },
    checkPositions: function(x, y) {
        if(y > 10) {
            listData.list.map((el) => {
                if(el.pos > (listData.selectedItem.pos)) {
                    if(el.pos < listData.selectedItem.pos + (y / listData.dragDistance)) {
                        console.log(el)
                        el.movedDir = -1;
                    } else {
                        el.movedDir = 0;
                    }
                } else {
                    el.movedDir = 0;
                }
            })
        }
        else if(y < -10) {
            listData.list.map((el) => {
                if(el.pos < (listData.selectedItem.pos)) {
                    if(el.pos > listData.selectedItem.pos + (-y / -listData.dragDistance)) {
                        el.movedDir = 1;
                    } else {
                        el.movedDir = 0;
                    }
                } else {
                    el.movedDir = 0;
                }
            })
        }
        this.moveOtherListItems(listData.list);
    },
    moveOtherListItems: function(arr) {
        arr.map((el, ind)=> {
            console.log(el.movedDir);
            if(el.movedDir == 0 && !el.selected.bool) {
                document.querySelectorAll('.dad-li')[el.pos].style.setProperty('transform', 'none');
            }
            else if(el.movedDir == -1) {
                console.log('ummm')
                document.querySelectorAll('.dad-li')[el.pos].style.transform = `translateY(-60px)`;
            }
            else if(el.movedDir == 1) {
                console.log('plzzz')
                document.querySelectorAll('.dad-li')[el.pos].style.transform = `translateY(60px)`;
            }
        })
    }
};

//Runs on page load
(function initApp() {
    listData.putWordInList(listData.initWords);
    listData.createHTML(listData.list);
})()