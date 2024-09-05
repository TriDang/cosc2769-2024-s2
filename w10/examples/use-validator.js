const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const validateName = body('name').notEmpty().isAlpha().isLength({min: 4, max: 10});

const validateEmail = body('email').notEmpty().isEmail().toLowerCase();

app.get("/important", validateName, validateEmail, (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    res.send(`Hello, ${req.body.name} ${req.body.email}!`);
    return;
  }
  res.send(result.array());
});

app.listen(2222, () => {
  console.log("Server started");
});
