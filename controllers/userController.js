const asyncHandler = require("express-async-handler");
// const prisma = require("../config/prismaConfig");

const addproduct = asyncHandler(async (req, res) => {
  try {
    // const { name, price } = req.body;
    // const productExists = await prisma.Product.findUnique({
    //   where: { name: name },
    // });
    // if (!productExists) {
    //   const product = await prisma.Product.create({ data: req.body });
    //   res.status(200);
    //   res.send({ message: "Product Created Sucessfully", product });
    // }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ message: "Server error" });
  }
});

const getproductbyid = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ message: "Server error" });
  }
});

const getproducts = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ message: "Server error" });
  }
});

const updateproduct = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ message: "Server error" });
  }
});

const deleteproducts = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = {
  getproducts,
  deleteproducts,
  getproductbyid,
  updateproduct,
  addproduct,
};
