import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginApi } from "../../redux/reducer/userReducer";
import { NavLink } from "react-router-dom";
import { Divider, Button, Table } from "antd";
import { Container } from "./Carts.style";
import { useSelector } from "react-redux";
import { getOrderApproval } from "../../redux/reducer/userReducer";
import {
  changeQuantityCartAction,
  deleteProdCartAction,
} from "../../redux/reducer/productReducer";

export default function Carts(props) {
  const dispatch = useDispatch();
  const { arrCart } = useSelector((state) => state.product);
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

  const columns = [
    {
      key: "index",
    },
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "image",
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
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "quantity",
      dataIndex: "quantityCart",
      key: "quantityCart",
      render: (_value, _records) => {
        return (
          <>
            <button
              className="btn btn-warning mx-2"
              onClick={() => {
                changeQuantityCart(false, _records);
              }}
            >
              -
            </button>
            {_records?.quantityCart}
            <button
              className="btn btn-warning mx-2"
              onClick={() => {
                changeQuantityCart(true, _records);
              }}
            >
              +
            </button>
          </>
        );
      },
    },
    {
      title: "total",
      dataIndex: "total",
      key: "total",
      render: (_value, _records) => {
        return (
          <>{(_records?.price * _records?.quantityCart).toLocaleString()}</>
        );
      },
    },
    {
      title: "",
      dataIndex: "",
      key: "action",
      render: (_value, _records) => {
        return (
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteProdCart(_records);
            }}
          >
            Delete
          </button>
        );
      },
    },
  ];

  return (
    <Container>
      <h2>Carts</h2>
      <Divider plain></Divider>
      <Table dataSource={dataSource} columns={columns} />
      <Button>SUBMIT ORDER</Button>
    </Container>
  );
}
