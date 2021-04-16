import axios from "axios";

const API_URL = "http://localhost:5000/orders";

export const getOrderBook = async () => {
  let response = {};

  try {
    response = await axios.get(API_URL);
  } catch (err) {
    return { err: err.message };
  }

  return response;
};
