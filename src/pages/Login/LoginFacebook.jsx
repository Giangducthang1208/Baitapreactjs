import axios from "axios";
import React from "react";
import FacebookLogin from "react-facebook-login";

export default function LoginFb() {
  const responseFacebook = (response) => {
    axios({
      url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
      method: "POST",
      data: {
        facebookToken: response.accessToken,
      },
    }).then((res) => {
      // Lưu vào Localstorage
      localStorage.setItem("accessToken", res.data.content.accessToken);
    });
  };

  return (
    <div>
      <FacebookLogin
        appId="123123123124324324"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
}
