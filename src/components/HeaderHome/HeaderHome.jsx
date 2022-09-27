import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Badge } from "antd";

export default function HeaderHome() {
  const { userLogin } = useSelector((state) => state.userReducer);

  const renderLoginNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      );
    }
    return (
      <NavLink className="nav-link" to="/profile">
        Hello !{userLogin.name}
      </NavLink>
    );
  };

  // const count = return

  return (
    <div className="header" id="header">
      <div className="container d-flex justify-content-between">
        <div className="brand">
          <NavLink to="/home" className="fs-3 fw-bold">
            CYBER SHOP
          </NavLink>
        </div>
        <div className="category">
          <ul className="d-flex">
            <li className="mx-2 fs-5">
              <NavLink>Home</NavLink>
            </li>
            <li className="mx-2 fs-5">
              <NavLink>Men</NavLink>
            </li>
            <li className="mx-2 fs-5">
              <NavLink>Woman</NavLink>
            </li>
            <li className="mx-2 fs-5">
              <NavLink>Sport</NavLink>
            </li>
          </ul>
        </div>
        <div className="user d-flex">
          <div className="search mx-2">
            <NavLink to="/search">
              <i className="fa fa-magnifying-glass fs-5 "></i>
            </NavLink>
          </div>
          <div className="cart mx-2">
            <NavLink to="/carts">
              {/* <Badge count={() => 1}>Cart</Badge> */}
              Cart
            </NavLink>
          </div>
          <div className="login mx-2">
            <NavLink to="/login">{renderLoginNavItem()}</NavLink>
          </div>
          <div className="register mx-2">
            <NavLink to="/register"></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
