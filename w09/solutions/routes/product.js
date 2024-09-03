const express = require("express");
const product_controller = require("../controllers/productController");

const router = express.Router();

router.get("/", product_controller.list);

router.get("/:productID", product_controller.get);

router.post("/", express.json(), product_controller.create);

exports.product = router;
