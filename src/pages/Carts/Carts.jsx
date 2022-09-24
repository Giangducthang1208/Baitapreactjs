import React, { memo } from "react";

 function Carts(props) {
  console.log("cart");
  return (
    <div>
      <table className="table">
        <thead>
          <tr style={{backgroudcolor:'D9D9D9'}}>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>Price</th>
            <th>quanity</th>
            <th>total</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>2</td>
                <td><img src="../../../../public/img/Products/image 3.png" alt="..." /></td>
                <td>iphone</td>
                <td>1000</td>
                <td>3</td>
                <td>1000</td>
                <td>
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-primary">DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default memo(Carts)