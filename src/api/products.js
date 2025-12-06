import axios from "axios";

// Auto-switch URL depending on dev or production
export const API_BASE = import.meta.env.PROD
  ? "https://ecommerce-backend-production-849a.up.railway.app"
  : "http://localhost:3000";

// Fetch ALL products
export const getAllProducts = async () => {
  const response = await axios.get(`${API_BASE}/products`);
  return response.data;
};

// Fetch products by category (optional)
export const getProductsByCategory = async (category) => {
  const response = await axios.get(`${API_BASE}/products?category=${category}`);
  return response.data;
};
