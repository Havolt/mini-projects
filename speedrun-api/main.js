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

function sortRunsTime(rd, best) {
    best.push(rd[0]);
    for(let i = 1; i < rd.length; i++) {
        if(rd[i].place < best[best.length-1].place) {
            best.push(rd[i]);
        }
    }
}

function drawChart(rd) {
    const app = document.querySelector('.app');
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'yellow']
    let sizes = [];
    let topSize;
    let perSizes = [];

    for(let i = 0; i < rd.length; i++) {
        sizes.push((rd[i].run.times.primary_t - rd[rd.length-1].run.times.primary_t) + 50);
    }

    topSize = sizes[0] / 100;

    for(let i = 0; i < sizes.length; i++) {
        perSizes.push(sizes[i] / topSize);
    }
    
    for(let i = 0; i < perSizes.length; i++) {
        const container = document.createElement('div');
        container.style.height="100%";
        container.style.display="inline-block"
        const el = document.createElement('div');
        el.style.background=colors[(i+7)%7];
        el.style.width="50px";
        el.style.height=perSizes[i]+'%';
        el.style.display="inline-block"
        const time = document.createElement('div');
        time.style.fontWeight="bold";
        time.style.textAlign="center";
        time.innerHTML = Math.round(rd[i].run.times.primary_t / 60);
        container.appendChild(el);
        container.appendChild(time);
        app.appendChild(container);
    }
}

function runApp() {
    sortRunsDate(runData);
    sortRunsTime(runData.runInOrder, runData.runInOrderBest);
    drawChart(runData.runInOrderBest);
}