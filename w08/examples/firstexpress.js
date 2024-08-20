const express = require("express");
const app = express();
const port = 2222;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/login", (req, res) => {
  res.send("Sent POST to /login");
});

app.all("*", (req, res) => {
  res.send("Other pages and methods");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
