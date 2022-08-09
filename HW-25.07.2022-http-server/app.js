const http = require('http');
const url = require('url');
const axios = require('axios');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
   
    if(pathname === '/') {

        res.writeHead(200, { 'Content-Type': 'image/jpeg' });        
        // res.write(`<h1>Main page</h1>`);
        fs.readFile('./image.jpg', (err, image) => {
            res.write(image);
        })

    } else if (pathname === '/shop') {

        // const filepath = './MyFile.jpg';
        // const streamFile = fs.createReadStream(filepath);
        const mimeFile = mime.getType('./MyFile.jpg');
        console.log(mimeFile);

        // res.writeHead(200, { 'Content-Type': 'application/octet-stream', 'Content-Disposition': 'filename="MyFile.txt"' });        
        // fs.createReadStream(filepath).pipe(res);
        
    } else if (pathname === '/planet') {

        res.writeHead(200, { 'Content-Type': 'application/json, text/html;'});
        res.write(`<h3>Planet page</h3>`);
        let planet = {
            name: 'Endor',
            diameter: 4900
        }
        let planetJson = JSON.stringify(planet, null, 2);
        res.write(planetJson);

    } else {

        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`<h3>Page not found</h3>`);

    }
    // res.end();
}).listen(3000);