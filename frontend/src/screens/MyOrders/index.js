import { useState } from "react";

import { Table, Button } from "react-bootstrap";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  
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
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button variant="danger">Cancel</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
