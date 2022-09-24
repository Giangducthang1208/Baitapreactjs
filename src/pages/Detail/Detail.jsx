import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";

export default function Detail() {
  const id = useParams();
  console.log(id.id);
  return (
    <>
      <div class="container d-flex justify-content-between align-items-center">
        <div class="detail-img">
          <img id="prod-img" src="" alt="..." class="w-100" />
        </div>
        <div class="detail-content">
          <h3 id="prod-name" class="fs-1"></h3>
          <p id="prod-desc" class="fs-2 fw-light"></p>
          <p class="fs-1 mt-5">Available Size</p>
          <div id="prod-size" class="my-3 d-flex justify-content-between w-50"></div>
          <span id="prod-price" class="fs-1"></span>
          <div class="number-prod d-flex h-75">
            <button class="fs-3 px-3 btn btn-secondary" id="down">-</button>
            <span id="number" class="fs-1 mx-3">1</span>
            <button class="fs-3 px-3 btn btn-secondary" id="up">+</button>
          </div>
          <a class="btn fs-1 btn1">Add to cart</a>
        </div>
      </div>
      <Product />
    </>
  );
}
