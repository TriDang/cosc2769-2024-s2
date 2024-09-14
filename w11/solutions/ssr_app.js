const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  const title = "Welcome to SSR";
  const heading = "Normal Page";
  const content = "This is the main content";
  res.render("layout", { title, heading, content });
});

app.get("/special", (req, res) => {
  const title = "Welcome to SSR";
  const content = "This is another main content";
  res.render("special", { title, content });
});

app.listen(2222, () => {
  console.log("Server started");
});
