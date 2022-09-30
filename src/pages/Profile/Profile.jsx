import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "../../redux/reducer/userReducer";
import { getProfileApi } from "../../redux/reducer/userReducer";
import { orderItem } from "../../redux/reducer/productReducer";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  let userUpdate = { ...userLogin };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileApi());
  }, []);
  console.log(userLogin);

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

      password: Yup.string()
        .required("Password không được bỏ trống!")
        .min(1, "Password từ 1 - 32 ký tự")
        .max(32, "Password từ 1- 32 ký tự"),

      phone: Yup.string()
        .required("Phone không được để trống")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone không đúng định dạng"
        )
        .min(8, "Phone từ 8 số trở lên"),
    }),
    onSubmit: (values) => {
      //chỗ này để call api update
    },
  });

  return (
    <div className="container">
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <div>
            <img src={userLogin?.avatar} className="w-50" alt="..." />
          </div>
          <br />
          <br />
          <br />
          <button
            className="nav-link active w-50"
            id="v-pills-Profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-Profile"
            type="button"
            role="tab"
            aria-controls="v-pills-Profile"
            aria-selected="true"
          >
            Profile
          </button>
          <button
            className="nav-link w-50"
            id="v-pills-History-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-History"
            type="button"
            role="tab"
            aria-controls="v-pills-History"
            aria-selected="false"
          >
            Order History
          </button>
        </div>
        <div className="tab-content w-100" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-Profile"
            role="tabpanel"
            aria-labelledby="v-pills-Profile-tab"
            tabIndex={0}
          >
            <form className="card">
              <div
                className="card-header bg-dark text-warning"
                style={{ fontSize: 20, fontWeight: "bold" }}
              >
                Profile
              </div>
              <div className="card-body row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Email</p>
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      disabled={true}
                      defaultValue={userUpdate.email}
                    />
                    <p className="text-danger"></p>
                  </div>
                  <div className="form-group">
                    <p>Phone</p>
                    <input
                      data-type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      onChange={form.handleChange}
                      defaultValue={userUpdate.phone}
                    />
                    <div className="text-danger position-absolute">
                      {form.errors.phone ? `${form.errors.phone}` : ""}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Name</p>
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      onChange={form.handleChange}
                      defaultValue={userUpdate.name}
                    />
                    <div className="text-danger position-absolute">
                      {form.errors.name ? `${form.errors.name}` : ""}
                    </div>
                  </div>
                  <div className="form-group">
                    <p>Password</p>
                    <input
                      data-type="number"
                      className="form-control"
                      id="password"
                      name="password"
                      type="password"
                      onChange={form.handleChange}
                      defaultValue={userUpdate.password}
                    />
                    <div className="text-danger position-absolute">
                      {form.errors.password ? `${form.errors.password}` : ""}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary mx-2"
                  type="submit"
                  // onClick={() => {
                  //   this.props.updateProduct(this.state.productInfo);
                  // }}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-History"
            role="tabpanel"
            aria-labelledby="v-pills-History-tab"
            tabIndex={0}
          >
            <h3>Order Detail</h3>
            <div className="mt-2">
              <table className="table">
                <thead>
                  <tr>
                    <th>Order id</th>
                    <th>img</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>day order</th>
                    <th>total</th>
                  </tr>
                </thead>
                {userLogin?.ordersHistory.map((orderItem, index) => {
                  return (
                    <tbody key={index}>
                      {orderItem.orderDetail?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{orderItem.id}</td>
                            <td>
                              <img
                                src={item.image}
                                width={50}
                                height={50}
                                style={{ objectFit: "over" }}
                                alt="..."
                              />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price.toLocaleString()}</td>
                            <td>{item.quantity}</td>
                            <td>{orderItem.date}</td>
                            <td>
                              {(item.price * item.quantity).toLocaleString()}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
