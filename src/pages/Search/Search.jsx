import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { getProductApi, getProductSearchAction } from "../../redux/reducer/productReducer";

export default function Search() {
  const { productSearch, arrProduct } = useSelector((state) => state.product);
  console.log(arrProduct);
  const dispatch = useDispatch();
  const getAllProductApi = () => {
    const actionThunk = getProductApi();
    dispatch(actionThunk);
  };
  useEffect(() => {
    getAllProductApi();
  }, []);
  return (
    <>
      <div className="container">
        <input
          type="text"
          onChange={(e) => {
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
