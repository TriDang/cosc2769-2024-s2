const express = require("express");
const morgan = require('morgan');
const app = express();
const port = 2222;

function middleware1(req, res, next) {
  console.log("Middleware 1");
  next();
}

function middleware2(req, res, next) {
  console.log("Middleware 2");
  next();
}

function auth(req, res, next) {
  if (req.url === '/secret') {
    res.send('Stop!');
  } else {
    console.log('Auth');
    next();
  }  
}

app.use(middleware1);
app.use(middleware2);
app.use(auth);
app.use("/secret", morgan('tiny'));

app.get("/", (req, res) => {
  res.send('Home Page');
});

app.get("/secret", (req, res) => {
  res.send('See request details the console');
});

app.all("*", (req, res) => {
  res.send("Other pages and methods");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
