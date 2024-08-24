import axios from "axios";
const BASE_URL = "https://react-ecommerce-website-api.onrender.com/api";
const TOKEN = process.env.TOKEN;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
