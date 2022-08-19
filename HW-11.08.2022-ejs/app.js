const { name } = require('ejs');
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
    {id:12, name: 'Блокноти'}
];


server.get('/', (req, res) => {
    res.render('items', {items});
});

server.get('/items', (req, res) => {
    res.json(items);
});

server.get('/products/:itemsId', (req, res) =>  {
    res.render('item', {
        name: [items[req.params["itemsId"]-1].name]
    });
});




server.listen(3000);