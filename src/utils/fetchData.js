import axios from "axios";

const getHomeData = async () => {
  const response = await axios.get(
    "https://ecommerce-backend-production-849a.up.railway.app/products"
  );
  return response.data;
};
export default getHomeData;
