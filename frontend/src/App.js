import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/Menu";

import OrderBook from "./screens/OrderBook";
import MyOrders from "./screens/MyOrders";
import AddOrder from "./screens/AddOrder";

export default function App() {
  const [userId, setUserId] = useState(1);

  return (
    <Router>
      <Menu userId={userId} setUserId={setUserId} />

      <>
        <Switch>
          <Route path="/" exact>
            <OrderBook />
          </Route>
          <Route path="/orders">
            <MyOrders userId={userId} />
          </Route>
          <Route path="/add_order">
            <AddOrder userId={userId} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
