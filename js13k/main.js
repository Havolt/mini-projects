const wordList = { 
    main: ['offline', 'disconnected', 'down', 'logged off', 'address',
    'algorithm', 'binary', 'byte', 'cpu', 'cloud', 'client', 'css', 'content delivery network',
    'data', 'database', 'decompress', 'desktop', 'digital', 'document', 'disk operating system',
    'download', 'electricity', 'email', 'explorer', 'file allocation table', 'fat32', 'file', 
    'filesharing', 'filesystem', 'firewall', 'folder', 'freeware', 'ftp', 'gigabyte',
    'gpu', 'hacker', 'hard disk', 'hardware', 'hdmi', 'home page', 'html', 'http', 
    'install', 'java', 'javascript', 'kernel', 'keyboard', 'key', 'laptop', 'malware', 'megabyte',
    'monitor', 'motherboard', 'mouse', 'modem', 'mp4', 'network', 'open source', 'operating system',
    'page', 'personal computer', 'php', 'piracy', 'plug-in', 'printer', 'privacy', 'program',
    'random_access_memory', 'read-only_memory', 'root', 'recycle bin', 'scan', 'search engine',
    'security', 'server', 'shareware', 'software', 'spam', 'spyware', 'super computer',
    'sdk', 'terabyte', 'upload', 'user', 'version', 'virus', 'xml', 'optical drive',
    'webcam', 'graphics card', 'microphone', 'variable', 'constant', 'loop', 'framework',
    'keydown', 'encryption', 'bug', 'ethernet', 'processor'],
    listTwo : [],
    playerList : [],
    listCopy: function() {
        listTwo = [];
        this.main.map((item) => this.listTwo.push(item));
    },
    playerListCreate: function() {
        playerList = [];
        while(this.listTwo.length > 0) {
            let newRand = Math.floor(Math.random() * this.listTwo.length);
            this.playerList.push(this.listTwo[newRand]);
            this.listTwo.splice(newRand, 1);
        }
    },
    playerListRemove: function() {
        this.playerList.shift();
    }
};

const gameFuncs = {
    currentWords : [],
    gameInProgress: false,
    currTime: new Date().getTime(),
    lives: {maxLives: 3, currentLives: 3, livesLost: 0},
    score: 0,
    scoreList: [],
    destroyedLetters: [],
    spawnInterval: 2000,
    spawnTime: 2000,
    removableWords: [],
    
    addScore: function(word) {
        this.score += word.length * 10;
        this.scoreList.push({yPos : 0, score: word.length * 10});
    },
    sListPos: function() {
        for(let i = 0; i < this.scoreList.length; i++) {
            this.scoreList[i].yPos -= 5;
            if(this.scoreList[i].yPos < -30) {
                this.scoreList.splice(i, 1);
                i--;
            }
        }
    },
    addDestroyedLetter: function(letter, obj) {
        const newObj = {};
        newObj.letter = letter;
        newObj.xPos = obj.xPos + (obj.inputPos *14);
        newObj.yPos = obj.yPos;
        newObj.ySpeedArrPos = 0;
        newObj.ySpeed = [-8, -2, 0, 1, 2, 4, 6, 8, 10, 14, 20, 28];
        this.destroyedLetters.push(newObj);
    },
    moveDestroyedLetters: function() {
        for(let i = 0; i < this.destroyedLetters.length; i++) {
            const lt = this.destroyedLetters[i];
            lt.xPos -= 2;
            lt.yPos += lt.ySpeed[lt.ySpeedArrPos];
            if(lt.ySpeedArrPos < lt.ySpeed.length -1){
                lt.ySpeedArrPos += 1;
            }
            if(lt.yPos > canvasData.cHeight) {
                this.destroyedLetters.splice(i, 1);
                i--;
            }
        }
    },
    getCurrentWord: function(word) {
        const newObj = {};
        newObj.word = word.split('');
        newObj.yPos = (Math.floor(Math.random()*(canvasData.cHeight - 50)) + 15);
        newObj.xPos = 0;
        newObj.speed = (Math.floor(Math.random() * 3) + 1);
        newObj.inputPos = 0;
        newObj.reachedEnd = false;
        this.currentWords.push(newObj);
    },
    setGameInProgress: function(bool) {
        this.gameInProgress = bool;
    },
    drawGame: function(wds) {
        const ctx = canvasData.ctx;
        ctx.clearRect(0, 0, canvasData.cWidth, canvasData.cHeight);
        ctx.fillStyle="#232323";
        ctx.fillRect(0, 0, canvasData.cWidth, canvasData.cHeight);

        //draw destroyed letters
        for(let i = 0; i < this.destroyedLetters.length; i++) {
            ctx.fillStyle="green";
            ctx.font="22px monospace";
            ctx.fillText(this.destroyedLetters[i].letter, this.destroyedLetters[i].xPos, this.destroyedLetters[i].yPos )
        }

        for(let i = 0; i < wds.length; i++) {
            for(let j = 0; j < wds[i].word.length; j++) {
                if(j < wds[i].inputPos) {
                    ctx.fillStyle="#3f3f3f";
                } else {
                    ctx.fillStyle="green";
                }
                ctx.font="22px monospace";
                ctx.fillText(wds[i].word[j], wds[i].xPos + (j*14), wds[i].yPos );
                if(j == (wds[i].word.length-1)) {
                    this.checkLostLife(wds[i].xPos + (j*14) + 8, i);
                }
            }            
        }
        //draw info area
        ctx.fillStyle="green";
        ctx.fillRect(0, canvasData.cHeight- 22, canvasData.cWidth, canvasData.cHeight);
        //show score
        ctx.fillStyle="black";
        ctx.font="bold 23px monospace";
        ctx.fillText(this.score, 10, canvasData.cHeight - 4);
        //lives text
        ctx.font="bold 18px monospace";
        ctx.fillText('Lives: ', canvasData.cWidth - 130, canvasData.cHeight - 6);
        //lives 
        for(let i = this.lives.maxLives; i >= 1; i-- ) {
            if(i <= this.lives.currentLives) {
                ctx.fillStyle="black"
            } else {
                ctx.fillStyle="grey";
            }
            ctx.fillRect((canvasData.cWidth - 75) + i * 12, canvasData.cHeight - 19, 8,16)
        }
        for(let i = 0; i < this.scoreList.length; i++) {
            ctx.fillStyle="green";
            ctx.font="bold 18px monospace";
            ctx.fillText('+'+this.scoreList[i].score, 20, (canvasData.cHeight - 20) + this.scoreList[i].yPos)
        }
    },
    checkLostLife: function(hitBox, arrPos) {
        if(hitBox >= canvasData.cWidth) {
            this.removableWords.push(arrPos);
            this.currentWords[arrPos].reachedEnd = true;
            this.lives.livesLost++;
        }
    },
    removeLives() {
        this.lives.currentLives -= this.lives.livesLost;
        this.lives.livesLost = 0;
    },
    checkWord: function(pos, word, itemNum) {
        if(pos == word.length) {
            this.removableWords.push(itemNum);
        }
    },
    changeInputPos: function(num, pos) {
        gameFuncs.currentWords[pos].inputPos += num;
        if(gameFuncs.currentWords[pos].word[gameFuncs.currentWords[pos].inputPos] == ' '){
            gameFuncs.currentWords[pos].inputPos += num;
        }
    },
    userInput: function(wordArr, key) {
        for(let i = 0; i < wordArr.length; i++) {
            if(wordArr[i].word[wordArr[i].inputPos] == key) {
                this.addDestroyedLetter(wordArr[i].word[wordArr[i].inputPos], wordArr[i]);
                this.changeInputPos(1, i);
                this.checkWord(wordArr[i].inputPos, wordArr[i].word, i);
            }
        }
    },
    removeWords: function() {
        this.removableWords.sort((a, b) => a - b);
        this.removableWords.map((el) => {
            if(!this.currentWords[el].reachedEnd){
                this.addScore(this.currentWords[el].word);
            }
            this.currentWords.splice(el, 1);
            this.removableWords.map((el) => el -= 1);
        })
        this.removableWords = [];
    },
    setNewWord: function() {
        this.getCurrentWord(wordList.playerList[0]);
        wordList.playerListRemove();
        if(wordList.playerList.length < 2) {
            wordList.listCopy();
            wordList.playerListCreate();
        }
    },
    moveWords: function(wds) {
        for(let i = 0; i < wds.length; i++) {
            wds[i].xPos += wds[i].speed;
        }
    },
    createWord: function(startTime) {
        if ((new Date().getTime() - startTime) > this.spawnTime) {
            this.setNewWord();
            this.spawnTime += this.spawnInterval;
        }
    },
    gameEngine: function() {
        this.createWord(this.currTime);
        this.moveWords(this.currentWords);
        this.moveDestroyedLetters();
        this.drawGame(this.currentWords);
        if(this.removableWords.length > 0) { this.removeWords()};
        if(this.lives.livesLost > 0){ this.removeLives()};
        if(this.scoreList.length > 0) {this.sListPos()};

        if(this.lives.currentLives > 0) {
            setTimeout(() => {
                this.gameEngine();
            }, (1000 / 10))
        } else{
            this.drawGame(this.currentWords);
            console.log('it ends here');
        }
    }
};

const canvasData = {
    cWidth: 720,
    cHeight: 480,
    c : document.querySelector('.gameCanvas'),
    ctx : document.querySelector('.gameCanvas').getContext('2d')
};

document.body.addEventListener('keyup', (e)=> {
    gameFuncs.userInput(gameFuncs.currentWords, e.key)
});

(function startGame() {
    wordList.listCopy();
    wordList.playerListCreate();
    gameFuncs.setNewWord();
    gameFuncs.setGameInProgress(true);
    gameFuncs.gameEngine();
})()

