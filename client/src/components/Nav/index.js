import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.isAdmin()) {
      return (
        <ul className="flex-row center">
          <li className="mx-1">
            <Link to="/orderHistory">
              View Orders
            </Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Manage Products
            </a>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Verify Users
            </a>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else if (Auth.loggedIn() && !Auth.isAdmin()) {
      return (
        <ul className="flex-row center">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else if (!Auth.loggedIn()) {
      return (      
        <ul className="flex-row center">
          <li className="mx-2">
            <Link to="/signup"  className="leftnav">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    } 
  }

  return (
  
    <header className="flex-row px-1">
      <h1>
        <Link to="/home">
          Paradise
        </Link>
      </h1>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
