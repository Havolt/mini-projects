
const listData = {
    initWords: ['Squall', 'Quistis', 'Seifer', 'Zell', 'Rinoa', 'Irvine'],
    list: [],
    putWordInList: function(arr) {
        arr.map((el)=>{
            listData.list.push(el);
        })
    }
};

(function initApp() {
    listData.putWordInList(listData.initWords);
    console.log(listData.list)
})()