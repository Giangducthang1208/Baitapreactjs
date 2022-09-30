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
    <div className="container py-5 h-100" id="register">
      <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
            className="img-fluid"
            alt="Phone image"
          />
        </div>
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form onSubmit={frm.handleSubmit}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example13">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.errors.email && frm.touched.email ? (
                <div className="text-danger position-absolute">
                  {frm.errors.email}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example23">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.errors.password && frm.touched.password ? (
                <div className="text-danger position-absolute">
                  {frm.errors.password}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="register mb-3">
              Not a member:
              <NavLink to={"/register"} className="">
                {" "}
                Sign up ?
              </NavLink>
            </div>
            <button
              type="submit"
              className="btn btn-warning btn-lg btn-block w-100"
            >
              Sign in
            </button>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>
            <LoginFb/>
          </form>
        </div>
      </div>
    </div>
  );
}
