const express = require("express");
const cookieParser = require("cookie-parser");
const { user } = require("./routes/user");
const { product } = require("./routes/product");

const app = express();
const port = 2222;
const SECRET = 'rmit-cosc2769';

app.use(cookieParser(SECRET));

app.use("/users", (req, res, next) => {
  if (req.method === 'POST' && req.url === '/login') {
    next();
    return;
  }
  // access control
  if (!req.signedCookies.user_id) {
    res.json({msg: 'You must login first to access this area'});
    return;
  }
  next();
}, user);

app.use("/products", product);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the Home page" });
});

app.all("*", (req, res) => {
  res.status(404).json({ msg: "Page not found" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
