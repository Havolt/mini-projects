const vm = new Vue({
    el: '#app',
    data: {
        gameState: true,
        player: {
            health: 100
        },
        monster: {
            health: 100
        }
    },
    methods: {
        attack() {
            const atkPower = Math.ceil((Math.random() * 8) + 2)
            console.log(atkPower);
        },
        spAttack() {
            const spAtkPower = Math.ceil((Math.random() * 25) + 5)
            const atkChance = Math.random();
            if(atkChance > 0.45) {
                console.log(spAtkPower);
            } else {
                console.log('miss')
            }
        },
        heal() {
            const healPower = Math.ceil((Math.random() * 15)+ 5)
            console.log(healPower);
        },
        endGame() {
            this.gameState = false;
        }
    },
    computed: {
        
    },
})