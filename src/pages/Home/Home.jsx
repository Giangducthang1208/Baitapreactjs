import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Product from "../../components/Product/Product";
import { getProductApi } from "../../redux/reducer/productReducer";

export default function Home() {
  const { arrProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getAllProductApi = () => {
    const actionThunk = getProductApi();
    dispatch(actionThunk);
  };
  useEffect(() => {
    getAllProductApi();
  }, []);
  
  const renderCarousel = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div
          className={
            index === 0
              ? "carousel-item active h-100 w-100"
              : "carousel-item h-100 "
          }
          key={index}
        >
          <div className="container d-flex align-items-center h-100">
            <div className="items-left w-50">
              <img src={prod.image} />
            </div>
            <div className="items-right w-50">
              <h2>{prod.name}</h2>
              <h4>{prod.shortDescription}</h4>
              <button
                className="btn btn-warning"
                onClick={() => {
                  navigate(`/detail/${prod.id}`);
                }}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-100">{renderCarousel()}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product arrProduct = {arrProduct} />
    </>
  );
}
