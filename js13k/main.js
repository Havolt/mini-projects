const wordList = { 
    main: ['offline', 'disconnected', 'down', 'logged off', 'address',
    'algorithm', 'binary', 'byte', 'cpu', 'cloud', 'client', 'css', 'content delivery netowrk',
    'data', 'database', 'decompress', 'desktop', 'digital', 'document', 'disk operating system',
    'download', 'electricity', 'email', 'explorer', 'file allocation table', 'fat32', 'file', 
    'filesharing', 'filesystem', 'firewall', 'folder', 'freeware', 'ftp', 'gigabyte',
    'gpu', 'hacker', 'hard disk', 'hardware', 'hdmi', 'home page', 'html', 'http', 
    'install', 'java', 'javascript', 'kernel', 'keyboard', 'key', 'laptop', 'malware', 'megabyte',
    'monitor', 'motherboard', 'mouse', 'modem', 'mp4', 'network', 'open source', 'operating system',
    'page', 'personal computer', 'php', 'piracy', 'plug-in', 'printer', 'privacy', 'program',
    'random_access_memory', 'read-only_memory', 'root', 'recycle bin', 'scan', 'search engine',
    'security', 'server', 'shareware', 'software', 'spam', 'spyware', 'super computer',
    'sdk', 'terabyte', 'upload', 'user', 'version', 'virus', 'xml', 'javascript'],
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
    currentWord : '',
    gameInProgress: false,
    inputPos : 0,

    getCurrentWord: function(word) {
        this.currentWord = word.split('');
    },
    setGameInProgress: function(bool) {
        this.gameInProgress = bool;
    },
    displayWord: function() {
        const wa = document.querySelector('.wordArea');
        wa.innerHTML = '';
        for(let i = 0; i < this.currentWord.length; i++) {
            const newEl = document.createElement('div');
            if(this.currentWord[i] == ' ') {
                newEl.innerHTML = '&#160;'
            } else {
                newEl.innerHTML = this.currentWord[i];
            }
            newEl.classList.add('letterGeneral')
            if(i < gameFuncs.inputPos) {
                newEl.classList.add('letterComplete')
            } else {
                newEl.classList.add('letterIncomplete')
            }
            wa.appendChild(newEl);
        }
    },
    checkWord: function(pos, word) {
        if(pos == word.length) {
            this.changeInputPos(-this.currentWord.length);
            wordList.playerListRemove();
            this.setNewWord();
        } else {
            this.displayWord();
        }
    },
    changeInputPos: function(num) {
        this.inputPos += num
    },
    userInput: function(pos, word, key) {
        if(word[pos] == key) {
            this.changeInputPos(1);
            this.checkWord(this.inputPos, this.currentWord);
        }
    },
    setNewWord: function() {
        wordList.playerListRemove();
        this.getCurrentWord(wordList.playerList[0]);
        this.displayWord();
    }
};

document.body.addEventListener('keyup', (e)=> {
    gameFuncs.userInput(gameFuncs.inputPos, gameFuncs.currentWord, e.key)
});

(function startGame() {
    wordList.listCopy();
    wordList.playerListCreate();
    gameFuncs.setNewWord();
    gameFuncs.setGameInProgress(true);
})()

