import { useState, useEffect } from "react";

import { Table, Button } from "react-bootstrap";

import { getOrdersForUser } from "../../utils/api";

const renderOrder = (order) => {
  return (
    <tr key={order.orderId}>
      <td>{order.orderId}</td>
      <td>{order.amount}</td>
      <td>{order.price}</td>
      <td>
        <Button variant="danger">Cancel</Button>
      </td>
    </tr>
  );
};

export default function MyOrders({ userId }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getOrdersForUser(userId);
      setOrders(data.orders);
    }
    fetchData();
  }, [userId]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{orders.map((order) => renderOrder(order))}</tbody>
    </Table>
  );
}
