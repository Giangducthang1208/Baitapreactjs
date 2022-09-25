import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <br />
          <h3 >Profile</h3>
          <br />
          <hr />
          <nav>
            <a href="#" className="nav-link"> Thông tin cá nhân</a>
            <a href="#" className="nav-link"> Lịch sử đơn hàng</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
