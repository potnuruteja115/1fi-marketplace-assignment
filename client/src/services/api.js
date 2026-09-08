const API_URL = "http://localhost:5000/api";

// ---------------------------------------------------------
// GET ALL PRODUCTS
// ---------------------------------------------------------

export const getProducts = async () => {
  const response = await fetch(
    `${API_URL}/products`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch products"
    );
  }

  const result = await response.json();

  return result.data;
};

// ---------------------------------------------------------
// GET SINGLE PRODUCT
// ---------------------------------------------------------

export const getProductById = async (id) => {
  const response = await fetch(
    `${API_URL}/products/${id}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch product"
    );
  }

  const result = await response.json();

  return result.data;
};

// ---------------------------------------------------------
// GET EMI PLANS
// ---------------------------------------------------------

export const getEmiPlans = async (
  id,
  color,
  storage
) => {
  const url =
    `${API_URL}/products/${id}/emi-plans` +
    `?color=${encodeURIComponent(color)}` +
    `&storage=${encodeURIComponent(storage)}`;

  const response = await fetch(url);

  if (!response.ok) {
    const error =
      await response.json().catch(
        () => null
      );

    throw new Error(
      error?.message ||
        "Failed to fetch EMI plans"
    );
  }

  const result = await response.json();

  return result.data;
};