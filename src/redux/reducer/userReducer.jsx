import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/tools";
import { history } from "../../index";
import { Notification } from "../../components/Notification/Notification";

const initialState = {
  userLogin: getStoreJson(USER_LOGIN), // có thể null or object
  // orderApproval: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
    // getOrderApprovalAction: (state, action) => {
    //   state.orderApproval = action.payload;
    // },
  },
});

export const { getProfileAction } = userReducer.actions;

export default userReducer.reducer;

export const loginApi = (userLogin) => {
  //email, password
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });

      //Sau khi đăng nhập thành công => lưu dữ liệu vào localstorage hoặc cookie
      
      // console.log(result);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      // Chuyển hướng về profile , trang quên mật khẩu
      history.push("/profile");

      Notification({
        type: "success",
        message: "Thành công",
        description: "Đăng nhập thành công!",
      });
      // Sau khi đăng nhập thành công thì dispatch action getProfile
      dispatch(getProfileApi());
      // dispatch(getOrderApproval());
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
    }
  };
};

export const getProfileApi = (accessToken = getStore(ACCESS_TOKEN)) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/getProfile",
        method: "POST",
        headers: {
          // headers là các phần dữ liệu mặc định được gửi đi
          Authorization: "Bearer " + accessToken,
        },
      });
      // Lấy được thông tin của profile => đưa lên redux
      const action = getProfileAction(result.data.content);
      dispatch(action);
      // lưu vào Storage
      setStoreJson(USER_LOGIN, result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};


export const registerApi = (user) => {
  return async () => {
    try {
      user = { ...user, gender: user.gender === "male" ? false : true };
      console.log(user);
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: user,
      });
      alert(result.data.message);
      history.push("/login");
      console.log(result);
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
    }
  };
};

// export const updateProfile = (userUpdate) =>{
//   return async (dispatch) => {
//     try{
//       const result = awa
//     }
//   }
// }
