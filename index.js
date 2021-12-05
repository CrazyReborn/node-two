const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');

const port = 8080;

// const server = http.createServer((req, res) => {
//     console.log(req);
//     console.log(res);
//     let filePath;
//     switch(req.url) {
//         case '/':
//             filePath = path.join(__dirname, 'index.html');
//             break;
//         case '/about':
//             filePath = path.join(__dirname, 'about.html');
//             break;
//         case '/contact-me':
//             filePath = path.join(__dirname, 'contact-me.html');
//             break;
//         default:
//             filePath = path.join(__dirname, '404.html');
//             break;
//     }
    
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             if (err.code == 'ENOENT') {
//                 fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
//                     res.writeHead(200, {'Content-Type': ''});
//                     res.end(data, 'utf8');
//                 })
//             } else {
//                 res.writeHead(500)
//                 res.end('server error: ' + err.code)
//             }
//         } else {
//             res.writeHead(200, {'Content-Type': ''});
//             res.end(data, 'utf8');
//         }
//     })
// })

app
    .get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
    })
    .get('/about',(req, res)=>{
    res.sendFile(path.join(__dirname, 'about.html'))
    })
    .get('/contact',(req, res)=>{
        res.sendFile(path.join(__dirname, 'contact-me.html'))
    });

app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname,'404.html'))
});

app.listen(port, () => {
    console.log('server is running on port ' + port)
})