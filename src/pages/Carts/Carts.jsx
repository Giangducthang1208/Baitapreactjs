import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginApi, getOrder } from "../../redux/reducer/userReducer";
import { NavLink } from "react-router-dom";
import { Divider, Button, Table, notification } from "antd";
import { Container, ContainerCount, ButtonAction, Title } from "./Carts.style";
import { useSelector } from "react-redux";
import empty_cart from "../../assets/img/empty-cart.gif";
import { getOrderApproval } from "../../redux/reducer/userReducer";
import {
  changeQuantityCartAction,
  deleteProdCartAction,
  submitOrderAction,
} from "../../redux/reducer/productReducer";
import axios from "axios";
import { Notification } from "../../components/Notification/Notification";

export default function Carts(props) {
  const dispatch = useDispatch();
  const { arrCart } = useSelector((state) => state.product);
  const { userLogin } = useSelector((state) => state.userReducer);
  const [dataSource, setDataSource] = useState([]);

  const changeQuantityCart = (act, prodClick) => {
    const action = {
      act: act,
      prodClick: prodClick,
    };
    dispatch(changeQuantityCartAction(action));
  };
  const deleteProdCart = (prodClick) => {
    dispatch(deleteProdCartAction(prodClick));
  };

  useEffect(() => {
    setDataSource(arrCart);
  }, [arrCart]);

  const submitOrder = () => {
    let orderDetail = dataSource?.map((item, index) => {
      return {
        productId: item.id,
        quantity: item.quantityCart,
      };
    });
    if (userLogin && orderDetail?.length > 0) {
      axios
        .post("https://shop.cyberlearn.vn/api/Users/order", {
          email: userLogin?.email,
          orderDetail: orderDetail,
        })
        .then(function (response) {
          Notification({
            type: "success",
            message: "Thành công",
            description: "Đặt hàng thành công!",
          });
          setDataSource([]);
          dispatch(submitOrderAction());
          localStorage.removeItem("productCart");
        })
        .catch(function (error) {
          Notification({
            type: "error",
            message: "Lỗi",
            description: error.response.data.message,
          });
        });
    } else {
      Notification({
        type: "error",
        message: "Lỗi",
        description: "Giỏ hàng trống nên không thể đặt hàng!",
      });
    }
  };

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (value, item, index) => index + 1,
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: <Title>IMAGE</Title>,
      dataIndex: "image",
      key: "image",
      render: (_value) => (
        <img
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
          }}
          src={_value}
        />
      ),
    },
    {
      title: <Title>NAME</Title>,
      dataIndex: "name",
      key: "name",
    },
    {
      title: <Title>PRICE</Title>,
      dataIndex: "price",
      key: "price",
    },
    {
      title: <Title>QUANTITY</Title>,
      dataIndex: "quantityCart",
      key: "quantityCart",
      render: (_value, _records) => {
        return (
          <ContainerCount>
            <Button
              className="button-count button-subtract"
              onClick={() => {
                changeQuantityCart(false, _records);
              }}
            >
              -
            </Button>
            {_records?.quantityCart}
            <Button
              className="button-count button-add"
              onClick={() => {
                changeQuantityCart(true, _records);
              }}
            >
              +
            </Button>
          </ContainerCount>
        );
      },
    },
    {
      title: <Title>TOTAL</Title>,
      dataIndex: "total",
      key: "total",
      render: (_value, _records) => {
        return (
          <>{(_records?.price * _records?.quantityCart).toLocaleString()}</>
        );
      },
    },
    {
      title: <Title>ACTION</Title>,
      dataIndex: "",
      key: "action",
      render: (_value, _records) => {
        return (
          <ButtonAction
            onClick={() => {
              deleteProdCart(_records);
            }}
          >
            DELETE
          </ButtonAction>
        );
      },
    },
  ];

  return (
    <Container>
      <h2>Carts</h2>
      <Divider plain></Divider>
      {dataSource?.length > 0 ? (
        <>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
          <div className="div-submit">
            <ButtonAction
              style={{ backgroundColor: "#F2994A", fontWeight: "bold" }}
              onClick={submitOrder}
            >
              SUBMIT ORDER
            </ButtonAction>
          </div>
        </>
      ) : (
        <div className="div-img">
          <h2>Không có sản phẩm nào trong giỏ hàng.</h2>
          <img src={empty_cart} alt="" />
        </div>
      )}
    </Container>
  );
}
