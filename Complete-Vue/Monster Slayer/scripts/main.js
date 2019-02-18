const vm = new Vue({
    el: '#app',
    data: {
        moveList: [],
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
            if(attacker == 0) { 
                this.monster.health -= atkPower; 
                this.addToMoveList('player', 'monster', atkPower, 'hits');
                this.enemyTurn();
                
            }
            else{
                this.player.health -= atkPower;
                this.addToMoveList('monster', 'player', atkPower, 'hits');
            }
        },
        spAttack() {
            const spAtkPower = Math.ceil((Math.random() * 25) + 5)
            const atkChance = Math.random();
            if(atkChance > 0.45) {
                this.monster.health -= spAtkPower; 
                this.addToMoveList('player', 'monster', spAtkPower, 'super hits');
            } else {
                this.addToMoveList('player', 'monster', 0, 'misses');
            }
            this.enemyTurn();
        },
        heal() {
            const healPower = Math.ceil((Math.random() * 15)+ 10);
            this.addToMoveList('player', 'himself', healPower, 'heals');
            
            this.player.health += healPower;
            if(this.player.health > 100) {
                this.player.health = 100;
            }
            this.enemyTurn();
        },
        enemyTurn() {
            if(this.monster.health > 1) {
                this.attack(1)
                if(this.player.health < 1) {
                    this.endGame('Player Loses!')
                }
            } else {
                this.endGame('Player Wins!')
            }
            
        },
        addToMoveList(attacker, defender, amt, method) {
            if(this.moveList.length > 12) {
                this.moveList.pop();
            }

            const newOb = {};
            newOb.move = `${attacker} ${method} ${defender} for ${amt}`.toUpperCase();
            if(attacker == 'player'){
                newOb.class = "player-turn"
            }
            else {
                newOb.class = "monster-turn"
            }
            
            this.moveList.unshift(newOb);


        },
        startGame() {
            console.log('starting game')
            this.player.health = 100;
            this.monster.health = 100;
            this.moveList = [];
            this.gameState = true;
        },
        endGame(msg) {
            console.log(typeof(msg));
            this.gameState = false;
            if(typeof(msg) == 'string') { alert(msg)}
        }
    },
    computed: {
        playerHealth() {
            return this.player.health > -1 ? this.player.health + '%' : '0%';
        },
        monsterHealth() {
            return this.monster.health > -1 ? this.monster.health + '%' : '0%';
        }
    },
})