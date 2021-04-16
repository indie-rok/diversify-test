import axios from "axios";

const API_URL = "http://localhost:5000/orders";

export const getOrderBook = async () => {
  let orderBook = {};

  try {
    orderBook = await axios.get(API_URL);
  } catch (err) {
    return { err };
  }

  console.log("hola", orderBook.data);
  return {};
};
