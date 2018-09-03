console.log('hello');

const runData = {runInOrder: [], runInOrderBest: []};

fetch('https://www.speedrun.com/api/v1/leaderboards/pd0wq31e/category/7kjrn323')
    .then(res => res.json())
    .then(data => {
        runData.rawData = data;
        runApp();
    })


function sortRunsDate(rd) {
    for(let i = 0; i < rd.rawData.data.runs.length; i++) {
        const newTime = new Date(rd.rawData.data.runs[i].run.date+'').getTime();
        if(runData.runInOrder.length < 1) {
            runData.runInOrder.push(rd.rawData.data.runs[i]);
        }
        else if(runData.runInOrder.length > 0 && runData.runInOrder.length < 2) {
            if(new Date(rd.runInOrder[0].run.date+'').getTime() < newTime) {
                rd.runInOrder.push(rd.rawData.data.runs[i]);
            }
            else {
                rd.runInOrder.unshift(rd.rawData.data.runs[i]);
            }
        }
        else {
            if(new Date(rd.runInOrder[0].run.date+'').getTime() > newTime) {
                rd.runInOrder.unshift(rd.rawData.data.runs[i]);
                console.log('first')
            }
            else if(new Date(rd.runInOrder[rd.runInOrder.length-1].run.date+'').getTime() < newTime) {
                rd.runInOrder.push(rd.rawData.data.runs[i]);
                console.log('last')
            }
            else {
                for(let j = 0; j < runData.runInOrder.length-1; j++) {
                    if((new Date(rd.runInOrder[j].run.date+'').getTime() < newTime) && (new Date(rd.runInOrder[j+1].run.date+'').getTime() > newTime)) {
                        console.log('inbetween')
                        rd.runInOrder.splice(j+1, 0, rd.rawData.data.runs[i]);
                        break;
                    }
                    
                }
            }
        }
    }
}

function sortRunsTime(rd) {
    for(let i = 0; i < rd.length; i++) {
        
    }
}

function runApp() {
    sortRunsDate(runData);
    sortRunsTime(runData.runInOrder);
}