const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello, World</h1>");
  } else if (req.url === "/text" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World");
  } else if (req.url === "/json" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ studentID: 123, studentName: "Alice", GPA: 3.6 }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("The page you are trying to access does not exist");
  }
});

server.listen(2222, () => {
  console.log("Server started");
});
