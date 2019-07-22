const http = require('http');
const fs = require('fs');

var htmlFile;
var mainCss;
var blog;
var about;
var page404;
var mainJS;

const server = http.createServer((req, res) => {

    fs.readFile('./folder/index.html', 'utf-8', function(err, data) {
        if (err) throw err;
        htmlFile = data;
    });
    fs.readFile('./folder/about.html', 'utf-8', function(err, data) {
        if (err) throw err;
        about = data;
    });
    fs.readFile('./folder/blog.html', 'utf-8', function(err, data) {
        if (err) throw err;
        blog = data;
    });
    fs.readFile('./folder/main.css', 'utf-8', function(err, data) {
        if (err) throw err;
        mainCss = data;
    });
    fs.readFile('./folder/main.js', 'utf-8', function(err, data) {
        if (err) throw err;
        mainJS = data;
    })
    fs.readFile('./folder/page404.html', 'utf-8', function(err, data) {
        if (err) throw err;
        page404 = data;
    });

    switch (req.url) {
        case '/main.css':
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(mainCss);
            break;
        case '/main.js':
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.end(mainJS);
            break;
        case '/blog':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(blog);
        case '/':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(htmlFile);
        case '/about':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(about);

        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(page404);
    }
    res.end();
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Server succesfully started, listening on 3000 port');
})