import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/Menu";

import OrderBook from "./screens/OrderBook";
import MyOrders from "./screens/MyOrders";

export default function App() {
  return (
    <Router>
      <Menu />

      <>
        <Switch>
          <Route path="/" exact>
            <OrderBook />
          </Route>
          <Route path="/orders">
            <MyOrders />
          </Route>
          <Route path="/add_order">
            <h2>add order</h2>
          </Route>
        </Switch>
      </>
    </Router>
  );
}
