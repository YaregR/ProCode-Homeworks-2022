const { name } = require('ejs');
const { application } = require('express');
const express = require('express');
const createError = require('http-errors');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const mainRouter = require('./routes/routes');
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views'); 

server.use(express.static(__dirname + '/public'));

server.use(upload.single('filedata'));
server.post('/upload', (req, res, next) => {
   
    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Помилка при завантаженні файла");
    else
        res.send("Файл завантажений");
});

let numberReq = 0;
server.use((req, res, next) => {
    numberReq++;
    console.log(numberReq);
    next();   
});

server.use('/', mainRouter);

server.use((error, req, res, next) => {
    console.log('Error status: ', error.status);
    console.log('Message: ', error.message);

    if(error.status === 500){
        console.log('Помилка ', error.status);
        res.status(error.status);
        res.render('500');
        return;
    }
    if(error.status === 400){
        console.log('Помилка ', error.status);
        res.status(error.status);
        res.render('400');
        return;
    }

});

server.use((req, res) => {
    res.statusCode = 404;
    res.render('404');
});

server.listen(3000);