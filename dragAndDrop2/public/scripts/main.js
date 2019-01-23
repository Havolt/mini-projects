
const listData = {
    itemHeld: false,
    selectedItem: '',
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
            newOb.selected = false;
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
    grabList: function() {
        listData.itemHeld = true;
        const siContainer = this.parentElement;
        for(let i = 0; i < siContainer.children.length; i++){
            if(this == siContainer.children[i]){
                listData.list.map((el) => {
                    if(el.pos == i) {
                        el.selected = true;
                        listData.selectedItem = el;
                        console.log(listData.selectedItem);
                    }
                })
                break;
            }
        }   
    },
    letGoList: function() {
        listData.itemHeld = false;
        listData.selectedItem.selected = false;
        console.log(listData.selectedItem);
        listData.selectedItem = '';
    },
    moveLi: function() {
        if(this.itemHeld) {
            //console.log(listData.selectedItem);
        }
    }
};

//Runs on page load
(function initApp() {
    listData.putWordInList(listData.initWords);
    listData.createHMTL(listData.list);
})()