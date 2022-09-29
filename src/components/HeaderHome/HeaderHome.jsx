import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localToState } from "../../redux/reducer/productReducer";
import { Notification } from "../Notification/Notification";

export default function HeaderHome() {
  const { arrCart } = useSelector((state) => state.product);
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const renderLoginNavItem = () => {
    if (userLogin == null) {
      return <NavLink to="/login">Login</NavLink>;
    }
    return (
      <NavLink to="/profile">
        <i className="fa-solid fa-user"></i> {userLogin.name}
      </NavLink>
    );
  };

  const renderCartNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink
          to="/login"
          onClick={() => {
            Notification({
              type: "error",
              message: "Lỗi",
              description: "Bạn phải đăng nhập!",
            });
          }}
        >
          Cart
        </NavLink>
      );
    } else {
      return <NavLink to="/carts">Cart ( {arrCart?.length} )</NavLink>;
    }
  };

  useEffect(() => {
    let localProd = JSON.parse(localStorage.getItem("productCart"));
    if (localProd) {
      dispatch(localToState(JSON.parse(localStorage.getItem("productCart"))));
    }
  }, []);

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
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="mx-2 fs-5">
              <NavLink to="/men">Men</NavLink>
            </li>
            <li className="mx-2 fs-5">
              <NavLink to="woman">Woman</NavLink>
            </li>
            <li className="mx-2 fs-5">
              <NavLink to="sport">Sport</NavLink>
            </li>
          </ul>
        </div>
        <div className="user d-flex">
          <div className="search mx-2">
            <NavLink to="/search">
              <i className="fa fa-magnifying-glass fs-5 "></i>
            </NavLink>
          </div>
          <div className="cart mx-2">{renderCartNavItem()}</div>
          <div className="login mx-2">{renderLoginNavItem()}</div>
        </div>
      </div>
    </div>
  );
}
