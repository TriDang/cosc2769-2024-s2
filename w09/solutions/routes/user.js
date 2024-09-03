const express = require("express");
const user_controller = require("../controllers/userController");

const router = express.Router();

router.post(
  "/login",
  express.json(),
  express.urlencoded({ extended: false }),
  user_controller.authenticate
);

router.get("/", user_controller.home);

exports.user = router;
