
    const vm = new Vue({
        el: '#app',
        data: {
            test: 'zoom'
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
                            if(data.address.county) {
                                const county = data.address.county;
                                tellCounty(county)
                            } else if (data.address.state) {
                                const state = data.address.state;
                                tellCounty(state)
                            }
                        });
                    })
                })
            }
        }
    })

    function tellCounty(area) {
        document.querySelector('#app').innerHTML = `You have entered the ${area} room`;
        fetch('/area')
        .then(res => {
            const reader = res.body.getReader();
        }
        
    } 

    function geoLocate() {
        
    }

    if("geolocation" in navigator) {
        
    } else {
        document.body.innerHTML = '<div class="noGPSTitle">Sorry this site needs GPS to function.</div>';
    }