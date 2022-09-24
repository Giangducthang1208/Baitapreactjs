import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  userLogin: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
});

export const {} = userReducer.actions;

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
      alert(result.data.message);
      console.log(result);
    } catch (err) {
      //alert(result.data.message); 
      console.log(err);
    }
  };
};
