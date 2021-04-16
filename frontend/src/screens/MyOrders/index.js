import { useState, useEffect } from "react";

import { Table, Button } from "react-bootstrap";

import { getOrdersForUser, cancelOrder } from "../../utils/api";

export default function MyOrders({ userId }) {
  const [orders, setOrders] = useState([]);

  const renderOrder = (order) => {
    return (
      <tr key={order.orderId}>
        <td>{order.orderId}</td>
        <td>{order.userId}</td>
        <td>{order.amount}</td>
        <td>{order.price}</td>
        <td>
          <Button
            variant="danger"
            onClick={async () => {
              const { status } = await cancelOrder(order.orderId);
              if (status === 204) {
                setOrders(
                  orders.filter(
                    (insideOrder) => insideOrder.orderId !== order.orderId
                  )
                );
              }
            }}
          >
            Cancel
          </Button>
        </td>
      </tr>
    );
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await getOrdersForUser(userId);
      setOrders(data.orders);
    }
    fetchData();
  }, [userId]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{orders.map((order) => renderOrder(order))}</tbody>
      </Table>
    </>
  );
}
