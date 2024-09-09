const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// validate username and password to be not empty
// and have their length in a given range

const validateUsername = body('username').notEmpty().isAlpha().withMessage('Only letters are allowed').isLength({min: 4, max: 10}).withMessage('Must be from 4 to 10 characters');
const validatePassword = body('password').notEmpty().isAlphanumeric().isLength({min: 8, max: 16});

app.post("/", validateUsername, validatePassword, (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    res.send("username and password are valid");
    return;
  }
  res.send(result.array());
});

app.listen(2222, () => {
  console.log("Server started");
});
