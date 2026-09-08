const products = require("../seed/products");
const emiPlans = require("../seed/emiPlans");

// Get all products
const getProducts = (req, res) => {
  try {
    res.json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

// Get a single product
const getProductById = (req, res) => {
  try {
    const product = products.find(
      (item) => item.id === req.params.id
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
};

// Get EMI plans
const getEmiPlans = (req, res) => {
  try {
    const plans = emiPlans[req.params.id];

    if (!plans) {
      return res.status(404).json({
        success: false,
        message: "EMI plans not found",
      });
    }

    res.json({
      success: true,
      data: plans,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch EMI plans",
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  getEmiPlans,
};
