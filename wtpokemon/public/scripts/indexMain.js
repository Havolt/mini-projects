
const vApp = new Vue({
    el: '#vApp',
    data: {
        randNum : 1,
        userInput: '',
        pokeImgClassObject: {
            'poke-img-hidden': true,
            '.poke-img-reveal': false
        }
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
        },
        pokeNamePartial: function () {
            let inpSplit = this.userInput.split('');
            let nameSplit = this.pokeName.split('');
            let totalName = [];

            for(let i = 0; i < inpSplit.length; i++) {
                if(inpSplit[i].toLowerCase() == nameSplit[i]) {
                    totalName.push(inpSplit[i]);
                }
                else {
                    return totalName.join('');
                }
            }

            return totalName.join('');
        }
    }
})