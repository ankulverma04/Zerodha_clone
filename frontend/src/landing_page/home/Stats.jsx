import React from "react";
import statsImg from "../../assets/images/ecosystem.png";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

function Stats() {
  return (
    <div className="container ">
      <div className="row mb-5 justify-content-center">
        <div className="col-10 col-sm-5">
          <h2>Trust with confidence</h2>
          <h4 className="mt-5">Customer-first alweays</h4>
          <p className="text-muted">
            Thats why 1.3+ crore customer trust Zerodha with 3.5+ lakh crores
            worth of equity investments
          </p>
          <h4 className="mt-5">Customer-first alweays</h4>
          <p className="text-muted">
            Thats why 1.3+ crore customer trust Zerodha with 3.5+ lakh crores
            worth of equity investments
          </p>
          <h4 className="mt-5">Customer-first alweays</h4>
          <p className="text-muted">
            Thats why 1.3+ crore customer trust Zerodha with 3.5+ lakh crores
            worth of equity investments
          </p>
          <h4 className="mt-5">Customer-first alweays</h4>
          <p className="text-muted">
            Thats why 1.3+ crore customer trust Zerodha with 3.5+ lakh crores
            worth of equity investments
          </p>
        </div>
        <div className="col-10 col-sm-5 mt-5">
          <img src={statsImg} alt="StatsImg" className="img-fluid" />
          <div>
            {/* <Link
              to="/products"
              className="d-inline-flex align-items-center"
              style={{ gap: "5px" }}
            >
              Explore our products <FaArrowRight />ß
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
