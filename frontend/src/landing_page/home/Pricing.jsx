import React from "react";
function Pricing() {
  return (
    <div className="container">
      <div className="row  py-5">
        <div className="col-12 col-sm-4 ">
          <h2>Unbeatable price</h2>
          <p className="text-muted mt-4">
            We poineered the concept of discount broking and price transparency
            in india. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="col-12 col-sm-3"></div>
        <div className="col-12 col-sm-5">
            <div className="row">
                <div className="col-sm-6">
                    <h1>₹0</h1>
                    <p className="text-muted">Free equity delivery and direct mutual funds</p>
                </div>
                <div className="col-sm-6">
                    <h1>₹20</h1>
                    <p className="text-muted">Intraday and F&Q</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
