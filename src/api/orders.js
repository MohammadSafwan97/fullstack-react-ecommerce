import axios from "axios";
import { API_BASE } from "./products.js"; // reuse the same base URL

// Fetch ALL orders for a user
export const getOrdersByUser = async (user_id) => {
  const response = await axios.get(`${API_BASE}/orders/user/${user_id}`);
  return response.data;
};

// Fetch a single order by ID
export const getOrderById = async (orderId) => {
  const response = await axios.get(`${API_BASE}/orders/${orderId}`);
  return response.data;
};
