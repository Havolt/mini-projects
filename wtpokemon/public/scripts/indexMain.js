
const vApp = new Vue({
    el: '#vApp',
    data: {
        randNum : 1
    },
    methods: {
        startGame: function() {
            this.randNum = Math.ceil(Math.random() * 150)
        }
    },
    computed: {
        imgBack : function() {
            return `./images/pokemon/${this.randNum}.png`;
        }
    }
})