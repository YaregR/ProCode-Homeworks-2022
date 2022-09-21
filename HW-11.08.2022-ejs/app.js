const { name } = require('ejs');
const express = require('express');

const mainRouter = require('./routes/routes');

const server = express();


server.set('view engine', 'ejs');
server.set('views', './views'); 

server.use(express.static(__dirname + '/public'));

server.use('/', mainRouter);


server.listen(3000);