import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getProductApi } from "../../redux/reducer/productReducer";

export default function Product(props) {
  const { arrProduct } = props;
  const navigate = useNavigate();

  const renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <figure className="cart-card" key={index}>
          <img src={prod.image} alt="" />
          <figcaption>
            <h3>{prod.name}</h3>
            <p>{prod.shortDescription}</p>
            <div className="price">
              <span>${prod.price}</span>
            </div>
          </figcaption>

          <a
            onClick={() => {
              navigate(`/detail/${prod.id}`);
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </figure>
      );
    });
  };
  return (
    <div className="container" id="product-feature">
      <h3 className="text-center fs-1 mt-5 fw-bold">Product Feature</h3>
      <div className="product-items d-flex flex-wrap justify-content-between">
        {renderProduct()}
      </div>
    </div>
  );
}
