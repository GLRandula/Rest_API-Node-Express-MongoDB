const express = require("express");
const { createProduct, returnProducts, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

router.post("/create", createProduct);
router.get("/read", returnProducts);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;