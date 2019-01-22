
const listData = {
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
    }
};

//Runs on page load
(function initApp() {
    listData.putWordInList(listData.initWords);
    listData.createHMTL(listData.list);
})()