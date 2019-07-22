const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url.indexOf('.html')) {
        if (req.url === '/') {
            fs.readFile(__dirname + '/folder/index.html', 'utf-8', (err, data) => {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                })
                res.end(data);
            });

        } else if (req.url === '/about') {
            fs.readFile(__dirname + '/folder/about.html', 'utf-8', (err, data) => {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.end(data);
            });

        } else if (req.url === '/blog') {
            fs.readFile(__dirname + '/folder/blog.html', 'utf-8', (err, data) => {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                })
                res.end(data);
            });

        } else {
            fs.readFile(__dirname + '/folder/404.html', 'utf-8', (err, data) => {
                res.writeHead(404, {
                    "Content-Type": "text/html"
                })
                res.end(data);
            });
        }
    } else if (req.url.indexOf('.css')) {
        fs.readFile(__dirname + '/folder/main.css', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Listening on port 3000");
});


// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//     console.log('Listening on port 3000')
// })

//     let filePath = path.join(
//         __dirname,
//         'folder',
//         req.url === '/' ? 'index.html' : req.url
//     )
//     let extname = path.extname(filePath);
//     let contentType = 'text/html';
//     switch (extname) {
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//     }
//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         if (err) {
//             // Возвращаем страницу 404
//             res.writeHead(404);
//             res.end('ASHIPKA');
//         } else {
//             res.writeHead(200, { "Content-Type": contentType })
//             res.end(data)
//         }
//     })

// let filePath = path.join(
//     __dirname,
//     "folder",
//     req.url === "/" ? "index.html" : req.url
// );

// let contentType = null;
// let extname = path.extname(filePath);
// extname ? true : filePath += ".html";
// extname ? true : extname = ".html";

// switch (extname) {
//     case ".css":
//         contentType = "text/css";
//         break;
//     case ".js":
//         contentType = "text/javascript";
//         break;
//     default:
//         contentType = "text/html";
//         break;
// }

// console.log(filePath);
// console.log(contentType);

// fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//         res.writeHead(404, { Location: "/404" });
//     } else {
//         res.writeHead(200, {
//             "Content-Type": contentType
//         });
//         res.end(data);
//     }
// });