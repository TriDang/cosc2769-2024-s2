const bcrypt = require("bcrypt");
const saltRounds = 10;
const password = "password";

bcrypt.hash(password, saltRounds, (err, hash) => {
  console.log("Hashed password:", hash);

  bcrypt.compare(password, hash, (err, result) => {
    if (result) {
      console.log("It is a match");
    } else {
      console.log("Does not match");
    }
  });
});

