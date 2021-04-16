const { v4: uuidv4 } = require("uuid");

var express = require("express");
var router = express.Router();

/* 
  Using Rest so placeOrder, cancelOrder,getOrderBook and getOrdersForUser are not part of standard
  instead we use GET, PUT, SHOW and DELETE VERBS
*/

/*
  TODO
  1. Add validators
  2. Add database
  3. Add auth
*/

let orders = [
  { orderId: uuidv4(), userId: 1, amount: 1, price: 7 },
  { orderId: uuidv4(), userId: 1, amount: 1, price: 4 },
  { orderId: uuidv4(), userId: 2, amount: 2, price: 2 },
  { orderId: uuidv4(), userId: 2, amount: 2, price: 9 },
  { orderId: uuidv4(), userId: 3, amount: 3, price: 3 },
  { orderId: uuidv4(), userId: 3, amount: 3, price: 4 },
  { orderId: uuidv4(), userId: 4, amount: 4, price: 1 },
  { orderId: uuidv4(), userId: 4, amount: 5, price: 2 },
  { orderId: uuidv4(), userId: 5, amount: 6, price: 5 },
  { orderId: uuidv4(), userId: 5, amount: 6, price: 8 },
];

/* GET /orders or /getOrderBook */
router.get("/", function (req, res, next) {
  let histogram = {};

  orders.forEach((order) => {
    const groupedAmounts = Object.keys(histogram);

    if (!groupedAmounts.includes(String(order.amount))) {
      histogram[order.amount] = 0;
    }

    histogram[order.amount] = histogram[order.amount] += order.price;
  });

  let arrayHistogram = [];

  for (let x in histogram) {
    const y = histogram[x];
    arrayHistogram.push({ x: parseInt(x), y: parseInt(y) });
  }

  res.json(arrayHistogram);
});

/* POST /orders or /placeOrder */
router.post("/", function (req, res, next) {
  const { userId, amount, price } = req.body;
  const order = { orderId: uuidv4(), userId, amount, price };

  orders.push(order);

  res.json({ error: [], order });
});

/* DELETE /orders or /cancelOrder */
router.delete("/:orderId", function (req, res, next) {
  orders = orders.filter(({ orderId }) => orderId !== req.params.orderId);
  res.status(204);
  res.send(orders);
});

/* SHOW /orders/1 or /getOrdersForUser */
router.get("/:userId", function (req, res, next) {
  const filteredOrders = orders.filter(
    ({ userId }) => userId === parseInt(req.params.userId)
  );

  res.json({ errors: [], orders: filteredOrders });
});

module.exports = router;
