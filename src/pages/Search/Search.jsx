import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import { getProductApi, getProductSearchAction } from "../../redux/reducer/productReducer";

export default function Search() {
  const { productSearch, arrProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams()
  const getAllProductApi = () => {
    const actionThunk = getProductApi();
    dispatch(actionThunk);
  };
  useEffect(() => {
    getAllProductApi();
  });
  return (
    <>
      <div className="container d-flex justify-content-center" id="search">
        <input
        placeholder="Search your shoes"
          type="text"
          onChange={(e) => {
            setSearchParams({keyword:e.target.value})
            const text = e.target.value.toLowerCase();
            const productFind = arrProduct.filter((prod) =>
              prod.name.toLowerCase().includes(text)
            );
            const action = getProductSearchAction(productFind);
            dispatch(action);
            console.log(productFind);
          }}
        />
      </div>
      <Product arrProduct={productSearch} />
    </>
  );
}
