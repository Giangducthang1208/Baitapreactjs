import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [],
  productDetail: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { getProductAction, getProductDetailAction } = productReducer.actions;

export default productReducer.reducer;

export const getProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      dispatch(getProductAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductDetailApi = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=",
        method: "GET",
      });
      dispatch(getProductDetailAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
