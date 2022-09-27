import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  const { userLogin } = useSelector((state) => state.userReducer);

  const renderLoginNavItem = () => {
    if (userLogin == null) {
      return <NavLink to="/login">Login</NavLink>;
    }
    return <NavLink to="/profile"><i className="fa-solid fa-user"></i> {userLogin.name}</NavLink>;
  };

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
            <NavLink>Cart</NavLink>
          </div>
          <div className="login mx-2">{renderLoginNavItem()}</div>
          <div className="register mx-2">
            <NavLink to="/register"></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
