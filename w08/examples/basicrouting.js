const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.end('Welcome to Home page');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.end('Welcome to About page');
  } else if (req.method === 'POST') {
    res.end('You sent a POST request');
  } else {
    res.end('This will catch all requests');
  }
});

server.listen(2222, () => {
  console.log("Server started");
});
