import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu({ userId, setUserId }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Trading Company</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Form inline>
          <Navbar.Text>UserId: </Navbar.Text>
          <FormControl
            type="text"
            placeholder="Enter user id"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
            className="mr-sm-2"
          />
        </Form>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Orderbook
          </Nav.Link>
          <Nav.Link as={Link} to="/orders">
            My Orders
          </Nav.Link>
          <Button as={Link} to="/add_order" variant="primary">
            Add order
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
