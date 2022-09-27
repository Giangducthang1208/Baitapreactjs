import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginApi } from "../../redux/reducer/userReducer";
import { NavLink } from "react-router-dom";
import { Divider, Button, Table } from "antd";
import { Container } from "./Carts.style";

export default function Carts(props) {
  const dispatch = useDispatch();

  const dataSource = [
    {
      id: 1,
      name: "Adidas Prophere",
      price: 350,
      quantity: 995,
      deleted: false,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      price: 450,
      quantity: 990,
      deleted: false,
      image:
        "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
    },
  ];

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
