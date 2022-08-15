const express = require('express');
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views'); 

server.use(express.static(__dirname + '/public'));

const items = [
    {id:1, name:'Візитки'},
    {id:2, name:'Наліпки'},
    {id:3, name:'Листівки'},
    {id:4, name:'Буклети'},
    {id:5, name:'Брошури'},
    {id:6, name:'Флаєри'},
    {id:7, name:'Плакати'},
    {id:8, name:'Банери'},
    {id:9, name:'Таблички'},
    {id:10, name: 'Конверти'},
    {id:11, name: 'Папки'},
];


server.get('/', (req, res) => {
    res.render('items', {items});
});

server.get('/items', (req, res) => {
    res.json(items);
});


server.listen(3000);