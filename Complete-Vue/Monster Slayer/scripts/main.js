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
        attack(attacker) {
            const atkPower = Math.ceil((Math.random() * 8) + 2)
            if(attacker == 0) { this.monster.health -= atkPower; this.enemyTurn()}
            else{this.player.health -= atkPower}
        },
        spAttack() {
            const spAtkPower = Math.ceil((Math.random() * 25) + 5)
            const atkChance = Math.random();
            if(atkChance > 0.45) {
                this.monster.health -= spAtkPower; 
            } else {
                console.log('miss')
            }
            this.enemyTurn();
        },
        heal() {
            const healPower = Math.ceil((Math.random() * 15)+ 10)
            
            this.player.health += healPower;
            if(this.player.health > 100) {
                this.player.health = 100;
            }
            this.enemyTurn();
        },
        enemyTurn() {
            this.attack(1)
        },
        startGame() {
            console.log('starting game')
        },
        endGame() {
            this.gameState = false;
        }
    },
    computed: {
        playerHealth() {
            return this.player.health + '%';
        },
        monsterHealth() {
            return this.monster.health + '%';
        }
    },
})