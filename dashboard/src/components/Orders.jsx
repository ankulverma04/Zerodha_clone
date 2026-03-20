import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/orders`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log("Order Failde", err);
      });
  }, []);

  return (
    <div className="order-table">
      <table>
        <thead>
          <tr className="bg-danger ">
            <th className="fs-6 text-dark fw-5">Stock</th>
            <th className="fs-6 text-dark fw-5">Qty</th>
            <th className="fs-6 text-dark fw-5">Price</th>
            <th className="fs-6 text-dark fw-5">Mode</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td className="fs-6 fw-5">{order.mode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
