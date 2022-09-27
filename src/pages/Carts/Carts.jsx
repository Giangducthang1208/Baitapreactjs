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

export default function Carts(props) {
  const dispatch = useDispatch();
  const { userLogin, orderApproval } = useSelector(
    (state) => state.userReducer
  );
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let productCart = JSON.parse(localStorage.getItem("productCart"));
    console.log(productCart, "111111111111");
    if (productCart?.length > 0) {
      setDataSource(productCart);
    }
  }, []);

  const columns = [
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
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "total",
      dataIndex: "total",
      key: "total",
      render: (_value, _records) => {
        return <>{_records?.price * _records?.quantity}</>;
      },
    },
    {
      title: "action",
      dataIndex: "action",
      key: "action",
      render: (_value, _records) => {
        return (
          <>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </>
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
