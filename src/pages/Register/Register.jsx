import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginApi, registerApi } from "../../redux/reducer/userReducer";

export default function Register() {
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      gender: "Male",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name không được để trống"),
      email: Yup.string()
        .required("Email không được bỏ trống!")
        .email("Email không đúng định dạng"),
      password: Yup.string()
        .required("Password không được bỏ trống!")
        .min(1, "Password từ 1 - 32 ký tự")
        .max(32, "Password từ 1- 32 ký tự"),
      confirmpassword: Yup.string()
        .required("Password không được bỏ trống!")
        .oneOf([Yup.ref("password")], "Password phải trùng nhau"),
      phone: Yup.string()
        .required("Phone không được để trống")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone không đúng định dạng"
        )
        .min(8, "Phone từ 8 số trở lên"),
    }),
    onSubmit: (values) => {
      const action = registerApi(values);
      dispatch(action);
    },
  });
  return (
    <section
      id="register"
      className="vh-100"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Register
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={form.handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            type="text"
                            className="form-control"
                            onChange={form.handleChange}
                          />
                          <div className="text-danger position-absolute">
                            {form.errors.name ? `${form.errors.name}` : ""}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            placeholder="Your Email"
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            onChange={form.handleChange}
                          />
                          <div className="text-danger position-absolute">
                            {form.errors.email ? `${form.errors.email}` : ""}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            name="password"
                            id="password"
                            placeholder="Your Password"
                            type="password"
                            className="form-control"
                            onChange={form.handleChange}
                          />
                          <div className="text-danger position-absolute">
                            {form.errors.password
                              ? `${form.errors.password}`
                              : ""}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            name="confirmpassword"
                            id="confirmpassword"
                            placeholder="Repeat your password"
                            type="password"
                            className="form-control"
                            onChange={form.handleChange}
                          />
                          <div className="text-danger position-absolute">
                            {form.errors.confirmpassword
                              ? `${form.errors.confirmpassword}`
                              : ""}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-phone fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            name="phone"
                            id="phone"
                            placeholder="Your Phone"
                            type="text"
                            className="form-control"
                            onChange={form.handleChange}
                          />
                          <div className="text-danger position-absolute">
                            {form.errors.phone ? `${form.errors.phone}` : ""}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-venus-mars fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <select
                            className="form-control"
                            id="gender"
                            name="gender"
                            onChange={form.handleChange}
                          >
                            <option value={true}>Female</option>
                            <option value={false}>Male</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-warning btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
