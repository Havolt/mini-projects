
const vApp = new Vue({
    el: '#vApp',
    data: {
        randNum : Math.ceil(Math.random() * 150),
        userInput: '',
        userWin: false,
        inputDisable: false,
        pokeImgClassObject: {
            'poke-img-hidden': true,
            'poke-img-reveal': false,
            'poke-img-rotate': false
        },
        pokeNumClassObject: {
            'poke-num-hidden': true,
            'poke-num-inline': false
        },
        pokeInputClassObject: {
            'poke-input-hide': false
        }
    },
    methods: {
        startGame: function() {
            this.userWin = false;
            this.userInput = '';
            this.pokeImgClassObject['poke-img-hidden'] = true;
            this.pokeImgClassObject['poke-img-reveal'] = false;
            this.pokeNumClassObject['poke-num-hidden'] = true;
            this.pokeNumClassObject['poke-num-inline'] = false;
            this.pokeImgClassObject['poke-img-rotate'] = false;
            this.pokeInputClassObject['poke-input-hide'] = false;
            this.inputDisable = false;
            this.randNum = Math.ceil(Math.random() * 150);
            setTimeout(function(){document.querySelector('.poke-input-text').focus();}, 50)
        },
        checkName: function() {
            if(this.userInput.toLowerCase() == this.pokeName) {
                this.pokeImgClassObject['poke-img-hidden'] = false;
                this.pokeImgClassObject['poke-img-reveal'] = true;
                this.pokeNumClassObject['poke-num-hidden'] = false;
                this.pokeNumClassObject['poke-num-inline'] = true;
                this.pokeInputClassObject['poke-input-hide'] = true;
                this.userInput = '';
                this.inputDisable = true;
                document.querySelector('.poke-input-button').focus();
                console.log('here')
                if(!this.userWin) {
                    this.pokeImgClassObject['poke-img-rotate'] = true;
                    this.userWin = true
                }
            }
        },
        highlightButton: function(el) {
            if(this.userWin) {
                el.focus();
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
            if(!this.userWin) {
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
            } else {
                return this.pokeName.charAt(0).toUpperCase() + this.pokeName.slice(1);;
            }
        }
    }
})