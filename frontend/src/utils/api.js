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

export const getOrdersForUser = async (userId) => {
  let response = {};

  try {
    response = await axios.get(`${API_URL}/${userId}`);
  } catch (err) {
    return { err: err.message };
  }

  return response;
};

export const placeOrder = async (order) => {
  let response = {};

  try {
    console.log("order api", order);
    response = await axios.post(API_URL, order);
  } catch (err) {
    return { err: err.message };
  }

  return response;
};

export const cancelOrder = async (orderId) => {
  let response = {};

  try {
    response = await axios.delete(`${API_URL}/${orderId}`);
  } catch (err) {
    return { err: err.message };
  }

  return response;
};
