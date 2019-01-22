
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

        console.log(newArr);

    }
};

//Runs on page load
(function initApp() {
    listData.putWordInList(listData.initWords);
    listData.createHMTL(listData.list);

    
})()