const express = require("express");
const list_controller = require("../controllers/listController");

const router = express.Router();

router.get("/", list_controller.list);

router.get("/:listID", list_controller.get);

router.post("/", express.json(), list_controller.create);

router.put("/:listID", express.urlencoded({ extended: false }), list_controller.update);

router.delete("/:listID", list_controller.delete);

exports.list = router;
