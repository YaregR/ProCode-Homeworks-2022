const express = require('express');
const server = express();

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
    res.render('pages/index');
});

server.get('/about', (req, res) => {
    res.render('pages/about');
});

server.get('/test', (req, res) => {
    res.send('<h2>Test</h2>');
});

server.get('/planet', (req, res) => {
    let planet = {
        name: 'Endor',
        diameter: 4900
    }
    res.json(planet);
})

server.get('/file', (req, res) => {
    res.download('./package.json');
})

server.listen(3000);