const express = require("express");
const cookieParser = require("cookie-parser");
const { list } = require("./routes/list");
const { user } = require("./routes/user");

const app = express();

const port = 2222;

const SECRET = 'hello-rmit';

app.use(cookieParser(SECRET));

app.use("/lists", (req, res, next) => {
  if (!req.signedCookies.user_id) {
    res.json({msg: 'You must login first to access this area'});
    return;
  }
  next();
}, list);

app.use("/users", user);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the Home page" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
