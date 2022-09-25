import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-black d-flex">
        <div className="w-">
          <NavLink className="navbar-brand" to="/">
            <img src="../img/Products/image 3.png" alt="..." />
          </NavLink>
        </div>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active text-black"
                to="/"
                aria-current="page"
              >
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-black" to="/">
                Men
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-black" to="/">
                Woman
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-black" to="/">
                Kid
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-black" to="/">
                Sport
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle text-black"
                to="/"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hooks
              </NavLink>
              <div
                className="dropdown-menu "
                aria-labelledby="dropdownId"
              >
                <NavLink className="dropdown-item" to="/home">
                  Home
                </NavLink>
                <NavLink className="dropdown-item" to="/memo">
                  Carts
                </NavLink>
                <NavLink className="dropdown-item" to="/login">
                  Login
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
