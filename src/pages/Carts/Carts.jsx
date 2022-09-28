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

  const changeQuantityCart = (act, prodClick) => {
    let productCart = JSON.parse(localStorage.getItem("productCart"));
    let productCartArr = [];
    if (productCart) {
      productCart.map((item, index) => {
        productCartArr.push(item);
      });
    }
    let prodFind = productCartArr.find((prod) => prod.id === prodClick.id);
    if (act) {
      prodFind.quantityCart += 1;
    } else {
      prodFind.quantityCart -= 1;
      if (prodFind.quantityCart < 1) {
        productCartArr.splice(prodFind, 1);
      }
    }
    localStorage.setItem("productCart", JSON.stringify(productCartArr));
  };
  const deleteProdCart = (idClick) => {
    let productCart = JSON.parse(localStorage.getItem("productCart"));
    let productCartArr = [];
    if (productCart) {
      productCart.map((item, index) => {
        productCartArr.push(item);
      });
    }
    let prodFind = productCartArr.find((prod) => prod.id === idClick.id);
    productCartArr.splice(prodFind, 1);
    localStorage.setItem("productCart", JSON.stringify(productCartArr));
  };

  useEffect(() => {
    let productCart = JSON.parse(localStorage.getItem("productCart"));
    if (productCart) {
      setDataSource(productCart);
    }
  }, [JSON.parse(localStorage.getItem("productCart"))]);

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
        return <>{_records?.price * _records?.quantityCart}</>;
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
