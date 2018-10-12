
    const vm = new Vue({
        el: '#app',
        data: {
            test: 'zoom',
            chatOn : false
        },
        methods: {
            getNav: function() {
                navigator.geolocation.getCurrentPosition((res) => {
                    const lon = res.coords.longitude;
                    const lat = res.coords.latitude;
                    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
                    fetch(url)
                    .then(fRes => {
                        
                        fRes.json().then(data => {
                            console.log(data);
                            if(data.address && data.address.county) {
                                const county = data.address.county;
                                tellCounty(county)
                            } else {
                                document.body.innerHTML = 'You must be in Ireland to use this service';
                            }
                        });
                    })
                })
            }
        }
    })

    function tellCounty(area) {
        //document.querySelector('#app').innerHTML = `You have entered the ${area} room`;
        
        fetch('/area', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                county: area
            })
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            if(data.warning) {
                document.body.innerHTML = data.warning;
                return;
            }
            console.log(`/${data.room}`);
            const scr1 = document.createElement('script');
            scr1.src = '/scripts/chatArea.js';
            document.body.appendChild(scr1);
        })
    }

    if("geolocation" in navigator) {
        
    } else {
        document.body.innerHTML = '<div class="noGPSTitle">Sorry this site needs GPS to function.</div>';
    }