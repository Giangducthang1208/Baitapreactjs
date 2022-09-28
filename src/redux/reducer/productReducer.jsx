import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [],
  productDetail: {},
  productSearch: [],
  arrCart: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductDetailAction: (state, action) => {
      state.productDetail = { ...action.payload, quantityCart: 1 };
    },
    getProductSearchAction: (state, action) => {
      state.productSearch = action.payload;
    },
    changeQuantityDetail: (state, action) => {
      if (action.payload) {
        state.productDetail.quantityCart += 1;
      } else {
        state.productDetail.quantityCart -= 1;
        if (state.productDetail.quantityCart <= 1) {
          state.productDetail.quantityCart = 1;
        }
      }
    },
  },
});

export const {
  getProductAction,
  getProductDetailAction,
  getProductSearchAction,
  changeQuantityDetail,
} = productReducer.actions;

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

export const getProductDetailApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
        method: "GET",
      });
      dispatch(getProductDetailAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
