
const vApp = new Vue({
    el: '#vApp',
    data: {
        randNum : 1,
        userInput: ''
    },
    methods: {
        startGame: function() {
            this.randNum = Math.ceil(Math.random() * 150)
        },
        checkName: function() {
            if(this.userInput.toLowerCase() == this.pokeName) {
                this.userInput = '';
                this.startGame();
            }
        }
    },
    computed: {
        imgBack : function() {
            return `./images/pokemon/${this.randNum}.png`;
        },
        pokeName: function() {
            return pokeData[this.randNum - 1].name;
        }
    }
})