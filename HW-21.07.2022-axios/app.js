const axios = require('axios');
const fs = require('fs');
const timestamp = require('unix-timestamp');

async function getPlanet() {
    const planet = await axios.get('https://swapi.dev/api/planets/1/');
    const time = timestamp.now();
    console.log(time);
    fs.writeFileSync( String(time)+'.json', JSON.stringify(planet.data, null, 2) );
    res.write()
}

getPlanet();
