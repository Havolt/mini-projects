
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
            'poke-num-hidden': true,
            'poke-num-inline': false
        }
    },
    methods: {
        startGame: function() {
            this.userInput = '';
            this.pokeImgClassObject['poke-img-hidden'] = true;
            this.pokeImgClassObject['poke-img-reveal'] = false;
            this.pokeNumClassObject['poke-num-hidden'] = true;
            this.pokeNumClassObject['poke-num-inline'] = false;
            this.randNum = Math.ceil(Math.random() * 150)
        },
        checkName: function() {
            if(this.userInput.toLowerCase() == this.pokeName) {
                this.pokeImgClassObject['poke-img-hidden'] = false;
                this.pokeImgClassObject['poke-img-reveal'] = true;
                this.pokeNumClassObject['poke-num-hidden'] = false;
                this.pokeNumClassObject['poke-num-inline'] = true;
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

            for(let i = 0; i < nameSplit.length; i++) {
                if(inpSplit[i]){
                    if(inpSplit[i].toLowerCase() == nameSplit[i]) {
                        if(i == 0){
                            totalName.push(inpSplit[i].toUpperCase());
                        } else {
                            totalName.push(inpSplit[i]);
                        }
                        
                    }
                    else {
                        totalName.push('?');
                    }
                }
                else{
                    totalName.push('?');
                }
            }
           
            return totalName.join('');
        }
    }
})