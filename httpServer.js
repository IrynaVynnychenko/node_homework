const http = require('http');
const fs = require('fs');

var htmlFile;
var mainCss;
var blog;
var about;
var page404;

const server = http.createServer((req, res) => {

    fs.readFile('./folder/index.html', 'utf-8', function(err, pizdec) {
        if (err) throw err;
        htmlFile = pizdec;
    });
    fs.readFile('./folder/about.html', 'utf-8', function(err, data) {
        about = data;
    });
    fs.readFile('./folder/blog.html', 'utf-8', function(err, data) {
        if (err) throw err;
        blog = data;
    });
    fs.readFile('./folder/main.css', 'utf-8', function(err, neponyatno) {
        mainCss = neponyatno;
    });
    fs.readFile('./folder/404.html', 'utf-8', function(err, data) {
        page404 = data;
    });

    switch (req.url) {
        case '/main.css':
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(mainCss);
            break;
        case '/blog.html':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(blog);
        case '/':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(htmlFile);
        case '/about.html':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(about);
        case '/index.html':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(htmlFile);
        default:
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(page404);

    }
    res.end();
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Server succesfully started, listening on 3000 port');
})