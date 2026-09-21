import React, { useEffect, useState } from "react";
import api from "../api.js";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    api
      .get("/api/orders")
      .then((res) => {
        setOrders(res.data);
        setMsg("");
      })
      .catch(() => {
        setMsg("Could not load orders");
      });
  }, []);

  if (msg) {
    return <p className="p-3">{msg}</p>;
  }

  if (orders.length === 0) {
    return <p className="p-3">No orders yet</p>;
  }

  return (
    <div className="order-table table-responsive">
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
