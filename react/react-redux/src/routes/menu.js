import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Com1 from '../components/Com1.js'
import Com2 from '../components/Com2.js'

export const  BasicExample = () => (
  <Router>
    <div>
      <ul>

        <li>
          <Link to="/no_users">Users List</Link>
        </li>
        <li>
          <Link to="/add_users">Add Users</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Com1} />
      <Route path="/add_users" component={Com2} />

    </div>
  </Router>
);
