import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginApi } from "../../redux/reducer/userReducer";
import { NavLink } from "react-router-dom";
import LoginFb from "./LoginFacebook";

export default function Login(props) {
  const dispatch = useDispatch();

  // console.log(123);
  // Lấy dữ liệu từ form
  const frm = useFormik({
    initialValues: {
      // Dữ liệu ban đầu mặc định của form
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      // Check validation
      email: Yup.string()
        .required("Email không được bỏ trống!")
        .email("Email không đúng định dạng"),
      password: Yup.string()
        .required("Password không được bỏ trống!")
        .min(1, "Password từ 1 - 32 ký tự")
        .max(32, "Password từ 1- 32 ký tự"),
      //.maches(/cyber/,'password không đúng định dạng!')
    }),

    onSubmit: (values) => {
      // console.log(values);
      const action = loginApi(values);
      dispatch(action);
    },
  });

  return (
    <div className="container">
      <h3>Login</h3>
      <hr />
      <form onSubmit={frm.handleSubmit}>
        <div className="form-group col-3">
          <p>Email</p>
          <input
            type="Email"
            className="form-control"
            id="email"
            name="email"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
          {frm.errors.email ? (
            <span className="text-danger">{frm.errors.email}</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group col-3">
          <p>Password</p>
          <input
            type="Password"
            className="form-control"
            id="Password"
            name="password"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
          {frm.errors.password ? (
            <span className="text-danger">{frm.errors.password}</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group col-3">
          <NavLink to='/register'>Register ?</NavLink>
          <button className="btn btn-success" type="submit">
            Login
          </button>
          <br />
          <br />
          <LoginFb />
        </div>
      </form>
    </div>
  );
}
