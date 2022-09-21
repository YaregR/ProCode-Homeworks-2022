const express = require('express');
const server = express();
const ejs = require('ejs');
const mainRouter = require('./routes/routes');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static(__dirname + '/public'));

server.use('/', mainRouter);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

server.use(multer({storage:storage}).array("filedata"));

server.post('/upload', (req, res, next) => {
   
    let filedata = req.files;
    console.log(filedata);
    if(!filedata)
        res.send("Upload error");
    else
        res.send("Files uploaded");
});




server.listen(3000);