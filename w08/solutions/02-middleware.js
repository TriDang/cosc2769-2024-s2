const express = require("express");
const cors = require('cors')
const app = express();
const port = 2222;

app.use(cors());

function log_user_agent(req, res, next) {
  console.log(req.headers["user-agent"]);
  next();
}

function stop_cycle(req, res, next) {
  res.send("Stop!");
}

app.use(log_user_agent);

app.use("/secret", stop_cycle);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/secret", (req, res) => {
  res.send("Protected page");
});

app.all("*", (req, res) => {
  res.send("Other pages and methods");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
