const express = require("express");
const { data, hello } = require("./mymodule");
const app = express();
const port = 2222;

app.get("/", (req, res) => {
  console.log(data);
  let msg = hello('Alice');
  res.send(msg);
});

app.all("*", (req, res) => {
  res.send("Other pages and methods");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
