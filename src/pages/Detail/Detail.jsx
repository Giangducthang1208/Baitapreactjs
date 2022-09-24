import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import {
  getProductApi,
  getProductDetailApi,
} from "../../redux/reducer/productReducer";

export default function Detail() {
  const getId = useParams();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.product);

  const getProductDetail = () => {
    const actionThunk = getProductDetailApi(getId.id);
    dispatch(actionThunk);
  };

  useEffect(() => {
    getProductDetail();
  }, [getId.id]);

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
          <span id="prod-price" className="fs-3">Price:
            $ {productDetail.price}
          </span>
          <div className="number-prod d-flex my-2">
            <button className="fs-6 px-3 btn btn-secondary" id="down">
              -
            </button>
            <span id="number" className="fs-4 mx-3">
              1
            </span>
            <button className="fs-6 px-3 btn btn-secondary" id="up">
              +
            </button>
          </div>
          <button className="btn btn-warning mt-2 fs-4">Add to cart</button>
        </div>
      </div>
      <Product />
    </>
  );
}
