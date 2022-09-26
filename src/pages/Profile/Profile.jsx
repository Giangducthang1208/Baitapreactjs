import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "../../redux/reducer/userReducer";
import { getProfileApi } from "../../redux/reducer/userReducer";
import {orderItem} from '../../redux/reducer/productReducer'

export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileApi());
  }, [userLogin]);
  console.log(userLogin);
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <br />
          <h1>Profile</h1>
          <br />
          <hr />

          <div className="flex">
            <img src={userLogin.avatar} className="w-100" alt="..." />
          </div>
          <br />
          <br />
          <br />
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-history-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-history"
                type="button"
                role="tab"
                aria-controls="nav-history"
                aria-selected="true"
              >
                Order history
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Favourite
              </button>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-history"
                role="tabpanel"
                aria-labelledby="nav-history-tab"
              >
                {userLogin.ordersHistory?.map((orderItem, index) => {
                  return (
                    <div className="mt-2" key={index}>
                      <hr/>
                      
                      <h3>Order Detail</h3>
                      <table className="table">
                        <thead>
                          <tr>
                            <th>id</th>
                            <th>img</th>
                            <th>name</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderItem.orderDetail?.map((item,index)=>{
                            return <tr key={index}>
                              <td>{item.id}</td>
                              <td>
                                <img src={item.image} width={50} height={50} style={{objectFit:'over'}} alt="..." />
                              </td>
                              <td>{item.name}</td>
                              <td>{item.price}</td>
                              <td>{item.quantity}</td>
                              <td>{item.status}</td>
                            </tr>
                          })}
                        
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                Favourite
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
