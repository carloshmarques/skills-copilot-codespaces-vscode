// Create web server
// 1. Create a web server
// 2. Create a route for /comments
// 3. Create a route for /hello
// 4. Create a route for /about
// 5. Create a route for /error

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;
    const query = url.parse(req.url, true).query;

    // 2. Create a route for /comments
    if (pathName === '/comments' && req.method === 'GET') {
        // 2.1 Read all comments from comments.json
        fs.readFile(`${__dirname}/data/comments.json`, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Error reading file' }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    }

    // 3. Create a route for /hello
    if (pathName === '/hello' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello' }));
    }

    // 4. Create a route for /about
    if (pathName === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'About' }));
    }

    // 5. Create a route for /error
    if (pathName === '/error' && req.method === 'GET') {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Error' }));
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running on port 3000');
});
