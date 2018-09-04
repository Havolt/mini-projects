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
    'sdk', 'terabyte', 'upload', 'user', 'version', 'virus', 'xml', 'javascript', 'optical drive',
    'webcam', 'graphics card', 'microphone'],
    listTwo : [],
    playerList : [],
    listCopy: function() {
        this.main.map((item) => this.listTwo.push(item));
    },
    playerListCreate: function() {
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
    spawnInterval: 3000,
    spawnTime: 3000,
    expl1 : new Audio('sounds/expl1.wav'),
    removeCurrentWord: function(arrPos) {
        this.currentWords.splice(arrPos, 1)
    },
    getCurrentWord: function(word) {
        const newObj = {};
        newObj.word = word.split('');
        newObj.yPos = (Math.floor(Math.random()*(canvasData.cHeight - 40)) + 20);
        newObj.xPos = 0;
        newObj.speed = (Math.floor(Math.random() * 5) + 1);
        newObj.inputPos = 0;
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

        for(let i = 0; i < wds.length; i++) {
            for(let j = 0; j < wds[i].word.length; j++) {
                if(j < wds[i].inputPos) {
                    ctx.fillStyle="grey";
                } else {
                    ctx.fillStyle="green";
                }
                ctx.font="22px monospace";
                ctx.fillText(wds[i].word[j], wds[i].xPos + (j*14), wds[i].yPos );
            }            
        }
    },
    checkWord: function(pos, word, itemNum) {
        if(pos == word.length) {
            this.removeCurrentWord(itemNum);
            this.expl1.play();
        }
    },
    changeInputPos: function(num, pos) {
        gameFuncs.currentWords[pos].inputPos += num;
    },
    userInput: function(wordArr, key) {
        for(let i = 0; i < wordArr.length; i++) {
            if(wordArr[i].word[wordArr[i].inputPos] == key) {
                this.changeInputPos(1, i);
                this.checkWord(wordArr[i].inputPos, wordArr[i].word, i);
            }
        }
    },
    setNewWord: function() {
        this.getCurrentWord(wordList.playerList[0]);
        wordList.playerListRemove();
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
        this.drawGame(this.currentWords);

        setTimeout(() => {
            this.gameEngine();
        }, (1000 / 5))
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

