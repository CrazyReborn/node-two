const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data, 'utf8');
                })
            } else {
                res.writeHead(500)
                res.end('server error: ' + err.code)
            }
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data, 'utf8');
        }
    })
})

server.listen(port, () => {
    console.log('server is running on port ' + port)
})