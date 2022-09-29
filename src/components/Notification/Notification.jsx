import { notification } from "antd";

export const Notification = (params) => {
  notification.open({
    ...params,
    placement: "topRight",
    top: 75,
  });
};
