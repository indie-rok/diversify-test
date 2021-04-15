import { useState } from "react";

import { Form, Button, Container } from "react-bootstrap";

export default function AddOrder({ userId }) {
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(1);

  return (
    <Container>
      <h1>Add Order for Stock</h1>
      <Form>
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            onChange={(event) => setAmount(event.target.value)}
            value={amount}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={(event) => setPrice(event.target.value)}
            value={price}
          />
        </Form.Group>

        <Button variant="success">Send</Button>
      </Form>
    </Container>
  );
}
