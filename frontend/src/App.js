import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/Menu";

export default function App() {
  return (
    <Router>
      <Menu />

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/users">
            <h2>Users</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
