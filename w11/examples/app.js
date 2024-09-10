const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/hello", (req, res) => {
  const user = { name: "Alice", status: "Gold" };
  const current_time = new Date();
  res.render("hello", { user, current_time });
});

app.get("/greeting", (req, res) => {
  const current_time = new Date();
  res.render("greeting", { current_time });
});

app.get("/learn", (req, res) => {
  const topics = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Express",
    "Coding tips/tricks",
  ];
  res.render("learn", { topics });
});

app.get("/layout", (req, res) => {
  const title = "Layout page";
  const header = "Top-level header";
  const subheader = "Main-level header";
  const content = "Pug is quite easy to work with";

  res.render("layout", { title, header, subheader, content });
});

app.listen(2222, () => {
  console.log("Server started");
});
