import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  padding: 50px 70px;
  .div-submit {
    display: flex;
    justify-content: right;
    margin-top: 20px;
  }
  .ant-table-thead > tr > th {
    background: #d9d9d9;
  }
`;

export const Title = styled.div`
  /* text-align: center; */
`;

export const ButtonAction = styled(Button)`
  background: #eb5757;
  color: #fff !important;
  font-size: 14px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  :hover {
    background: #eb5757;
  }
`;

export const ContainerCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  background-color: #f0f0f0;
  .button-count {
    background: #6200ee;
    color: #fff !important;
    font-size: 20px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14),
      0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
`;
