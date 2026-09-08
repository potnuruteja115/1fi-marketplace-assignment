const products = require("../seed/products");

// ---------------------------------------------------------
// GET ALL PRODUCTS
// ---------------------------------------------------------

const getProducts = (req, res) => {
  try {
    res.json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error("GET PRODUCTS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

// ---------------------------------------------------------
// GET SINGLE PRODUCT
// ---------------------------------------------------------

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
    console.error("GET PRODUCT ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
};

// ---------------------------------------------------------
// GET DYNAMIC EMI PLANS
// ---------------------------------------------------------

const getEmiPlans = (req, res) => {
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

    const { color, storage } = req.query;

    const variant = product.variants.find(
      (item) =>
        item.color === color &&
        item.storage === storage
    );

    if (!variant) {
      return res.status(404).json({
        success: false,
        message:
          "Selected color and storage combination not found",
      });
    }

    const price = Number(variant.price);

    const tenures = [3, 6, 9, 12];

    const plans = tenures.map((tenure) => ({
      id: `${product.id}-${color}-${storage}-${tenure}`,
      tenure,
      monthlyAmount: Math.ceil(price / tenure),
      interest: 0,
      label: `${tenure} Months`,
    }));

    res.json({
      success: true,

      data: {
        productId: product.id,
        productName: product.name,
        color,
        storage,
        price,
        plans,
      },
    });
  } catch (error) {
    console.error("EMI ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to calculate EMI plans",
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  getEmiPlans,
};