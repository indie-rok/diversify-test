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
  { orderId: "asd", userId: 1, amount: 2, value: 3 },
  { orderId: "zxc", userId: 1, amount: 2, value: 3 },
];

/* GET /orders or /getOrderBook */
router.get("/", function (req, res, next) {
  res.json(orders);
});

/* POST /orders or /placeOrder */
router.post("/", function (req, res, next) {
  const { userId, amount, value } = req.body;
  const order = { orderId: uuidv4(), userId, amount, value };

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
