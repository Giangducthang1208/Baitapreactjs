import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import {
  addToCartAction,
  changeQuantityDetail,
  getProductDetailApi,
} from "../../redux/reducer/productReducer";

export default function Detail() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const { productDetail } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const getId = useParams();

  const getProductDetail = () => {
    const actionThunk = getProductDetailApi(getId.id);
    dispatch(actionThunk);
  };

  const renderSizeProduct = () => {
    let sizeProduct = productDetail.size;
    if (sizeProduct) {
      return sizeProduct.map((size, index) => {
        return (
          <button key={index} className="btn btn-secondary fs-6">
            {size}
          </button>
        );
      });
    }
  };

  const addToCart = () => {
    dispatch(addToCartAction(productDetail));
    alert("Thêm vào giỏ hàng thành công ");
  };

  useEffect(() => {
    getProductDetail();
    window.scrollTo(0, 0);
  }, [getId.id]);

  return (
    <>
      <div
        className="container d-flex justify-content-between align-items-center"
        id="product-detail"
      >
        <div className="detail-img">
          <img
            id="prod-img"
            src={productDetail.image}
            alt="..."
            className="w-100"
          />
        </div>
        <div className="detail-content">
          <h3 id="prod-name" className="fs-2 fw-bold">
            {productDetail.name}
          </h3>
          <p id="prod-desc" className="fs-6 fw-light">
            {productDetail.description}
          </p>
          <p className="fs-4 mt-3">Available Size</p>
          <div
            id="prod-size"
            className="my-3 d-flex justify-content-between w-50"
          >
            {renderSizeProduct()}
          </div>
          <span id="prod-price" className="fs-3">
            Price: $ {productDetail.price}
          </span>
          <div className="number-prod d-flex my-2">
            <button
              className="fs-6 px-3 btn btn-secondary"
              id="down"
              onClick={() => {
                dispatch(changeQuantityDetail(false));
              }}
            >
              -
            </button>
            <span id="number" className="fs-4 mx-3">
              {productDetail.quantityCart}
            </span>
            <button
              className="fs-6 px-3 btn btn-secondary"
              id="up"
              onClick={() => {
                dispatch(changeQuantityDetail(true));
              }}
            >
              +
            </button>
          </div>
          <button
            className="btn btn-warning mt-2 fs-4"
            onClick={() => {
              if (userLogin == null) {
                return alert("bạn phải đăng nhập để thêm vào giỏ hàng");
              } else {
                addToCart();
              }
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
      <Product arrProduct={productDetail.relatedProducts} />
    </>
  );
}
