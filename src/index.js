import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/assets/sass/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import Nike from "./pages/Category/Nike";
import Adidas from "./pages/Category/Adidas";
import Converse from "./pages/Category/Converse";
import Profile from "./pages/Profile/Profile"
import LoginFacebook from "./pages/Login/LoginFacebook"
import Register from "./pages/Register/Register";
import Carts from "./pages/Carts/Carts";
import {unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import {createBrowserHistory} from 'history';
// Cấu hình History (chuyển hướng không cần hook navigate)
import "antd/dist/antd.css";
export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="nike" element={<Nike />}></Route>
          <Route path="adidas" element={<Adidas />}></Route>
          <Route path="converse" element={<Converse />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="loginfb" element={<LoginFacebook />}></Route>
          <Route path="carts" element={<Carts />}></Route>
          <Route path="register" element={<Register/>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
