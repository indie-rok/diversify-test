import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Trading Company</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Enter user id"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Set user id</Button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Order Book</Nav.Link>
          <Nav.Link href="#link">My Orders</Nav.Link>
          <Button variant="primary">Add order</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
