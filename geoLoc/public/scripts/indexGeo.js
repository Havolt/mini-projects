
    function tellCounty(county) {
        document.querySelector('#app').innerHTML = `You have entered the ${county} room`;
    } 

    function geoLocate() {
        navigator.geolocation.getCurrentPosition((res) => {
            const lon = res.coords.longitude;
            const lat = res.coords.latitude;
            const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
            fetch(url)
            .then(fRes => {
                fRes.json().then(data => {
                    const county = data.address.county.split('').splice(7).join('');
                    tellCounty(county)
                    console.log(county);
                });
            })
        })
    }

    if("geolocation" in navigator) {
        
    } else {
        document.body.innerHTML = '<div class="noGPSTitle">Sorry this site needs GPS to function.</div>';
    }