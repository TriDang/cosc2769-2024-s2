const http = require("http");

/**
 * another option:
import { createServer } from "http";
 */

const server = http.createServer((req, res) => {
  res.write('Hello, world! 456');
  res.end();
});

server.listen(2222, () => {
  console.log("Server started");
});
