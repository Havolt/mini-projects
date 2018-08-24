
const vApp = new Vue({
    el: '#vApp',
    data: {
        randNum : 1,
        userInput: '',
        pokeImgClassObject: {
            'poke-img-hidden': true,
            '.poke-img-reveal': false
        },
        pokeNumClassObject: {
            'poke-num-hidden': true
        }
    },
    methods: {
        startGame: function() {
            this.userInput = '';
            this.pokeImgClassObject['poke-img-hidden'] = true;
            this.pokeImgClassObject['poke-img-reveal'] = false;
            this.pokeNumClassObject['poke-num-hidden'] = true;
            this.randNum = Math.ceil(Math.random() * 150)
        },
        checkName: function() {
            if(this.userInput.toLowerCase() == this.pokeName) {
                this.pokeImgClassObject['poke-img-hidden'] = false;
                this.pokeImgClassObject['poke-img-reveal'] = true;
                this.pokeNumClassObject['poke-num-hidden'] = false;
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
        pokeNum: function () {
            if(pokeData[this.randNum - 1].id < 10) {
                return `#00${pokeData[this.randNum - 1].id}`;
            }
            else if(pokeData[this.randNum - 1].id < 100) {
                return `#0${pokeData[this.randNum - 1].id}`;
            }
            else {
                return `#${pokeData[this.randNum - 1].id}`;
            }
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