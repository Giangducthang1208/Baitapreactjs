import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

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

  return (
    <div className="header" id="header">
      <div className="container d-flex justify-content-between">
        <div className="brand">
          <NavLink to="/home" className="fs-3 fw-bold">
            CYBER SHOP
          </NavLink>
        </div>
<<<<<<< HEAD
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
            <li className="nav-item">{renderLoginNavItem()}</li>
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
              <div className="dropdown-menu " aria-labelledby="dropdownId">
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
=======
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
            <NavLink to='/search'><i className="fa fa-magnifying-glass fs-5 "></i></NavLink>
          </div>
          <div className="cart mx-2">
            <NavLink>Cart</NavLink>
          </div>
          <div className="login mx-2">
            <NavLink to='/login'>Login</NavLink>
          </div>
          <div className="register mx-2">
            <NavLink to='/register'></NavLink>
          </div>
>>>>>>> eab9e938ba97b50298ba8fd0f6420cfc58f4fe44
        </div>
      </div>
    </div>
  );
}
