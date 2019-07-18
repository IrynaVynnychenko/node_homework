const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        'folder',
        req.url === '/' ? 'index.html' : req.url
    )
    let extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
    }
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            // Возвращаем страницу 404
            res.writeHead(404);
            res.end('ASHIPKA');
        } else {
            res.writeHead(200, { "Content-Type": contentType })
            res.end(data)
        }
    })
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('Listening on port 3000')
})