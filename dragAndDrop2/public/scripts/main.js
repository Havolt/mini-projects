
const listData = {
    initWords: ['Squall', 'Quistis', 'Seifer', 'Zell', 'Rinoa', 'Irvine'],
    list: [],
    putWordInList: function(arr) {
        arr.map((el)=>{
            const newOb = {};
            newOb.name = el;
            newOb.pos = arr.length+1;
            newOb.moved = false;
            newOb.movedDir = 0;
            listData.list.push(newOb);
        })
    },
    createHMTL: function(arr) {
        console.log(arr)
    }
};

(function initApp() {
    listData.putWordInList(listData.initWords);
    listData.createHMTL(listData.list);

    
})()