import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "../../redux/reducer/userReducer";
import { getProfileApi } from "../../redux/reducer/userReducer";
import { orderItem } from "../../redux/reducer/productReducer";

export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileApi());
  }, []);
  console.log(userLogin);

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
                    <input className="form-control" id="id" name="id" />
                    <p className="text-danger"></p>
                  </div>
                  <div className="form-group">
                    <p>Phone</p>
                    <input className="form-control" id="name" name="name" />
                    <p className="text-danger"></p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Name</p>
                    <input
                      data-type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      type="text"
                    />
                    <p className="text-danger"></p>
                  </div>
                  <div className="form-group">
                    <p>Password</p>
                    <input
                      data-type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      type="text"
                    />
                    <p className="text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <p>Gender</p>
                <select>
                  <option>Female</option>
                  <option>Male</option>
                </select>
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
                            <td>{(item.price * item.quantity).toLocaleString()}</td>
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
