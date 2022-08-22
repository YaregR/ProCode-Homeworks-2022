const { name } = require('ejs');
const express = require('express');

const mainRouter = require('./routes/routes');
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views'); 

server.use(express.static(__dirname + '/public'));

let numberReq = 0;
server.use((req, res, next) => {
    numberReq++;
    console.log(numberReq);
    next();   
});

server.use('/', mainRouter);

server.use((req, res) => {
    res.statusCode = 404;
    res.render('404');
});

server.listen(3000);