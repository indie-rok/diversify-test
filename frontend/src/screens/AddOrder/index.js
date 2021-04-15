import { Form, Button, Container } from "react-bootstrap";

export default function AddOrder() {
  return (
    <Container>
      <h1>Add Order for Stock</h1>
      <Form>
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control />
        </Form.Group>

        <Button variant="success">Send</Button>
      </Form>
    </Container>
  );
}
