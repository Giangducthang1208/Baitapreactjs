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
    addToCartAction: (state, action) => {
      let prodDetail = action.payload;
      let prodFind = state.arrCart.find((prod) => prod.id === prodDetail.id);
      if (prodFind) {
        prodFind.quantityCart += prodDetail.quantityCart;
      } else {
        state.arrCart.push(prodDetail);
      }
      localStorage.setItem("productCart", JSON.stringify(state.arrCart));
      console.log(state.arrCart);
    },
    localToState: (state, action) => {
      state.arrCart = action.payload;
    },
    deleteProdCartAction: (state, action) => {
      let prodClick = action.payload;
      let prodFind = state.arrCart.filter((prod) => prod.id !== prodClick.id);
      localStorage.setItem("productCart", JSON.stringify(prodFind));
      state.arrCart = prodFind;
    },
    changeQuantityCartAction: (state, action) => {
      let {prodClick, act} = action.payload
      let prodFind = state.arrCart.find((prod) => prod.id === prodClick.id);
      if (act) {
        prodFind.quantityCart += 1;
      } else {
        prodFind.quantityCart -= 1;
        if (prodFind.quantityCart < 1) {
          state.arrCart.splice(prodFind, 1);
        }
      }
      localStorage.setItem("productCart", JSON.stringify(state.arrCart));
    },
  },
});

export const {
  changeQuantityCartAction,
  deleteProdCartAction,
  localToState,
  addToCartAction,
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
