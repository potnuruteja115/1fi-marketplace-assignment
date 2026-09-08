const express = require("express");

const {
  getProducts,
  getProductById,
  getEmiPlans,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id/emi-plans", getEmiPlans);

router.get("/:id", getProductById);

module.exports = router;