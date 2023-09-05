const express = require("express");
const router = express.Router();

const {
  getproducts,
  deleteproducts,
  getproductbyid,
  updateproduct,
  addproduct,
} = require("../controllers/userController");

router.get("/products", getproducts);
router.delete("/products", deleteproducts);
router.get("/products:id", getproductbyid);
router.patch("/products:id", updateproduct);
router.post("/product", addproduct);

module.exports = router;
