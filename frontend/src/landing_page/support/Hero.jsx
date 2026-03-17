import React from "react";
function Hero() {
  return (
    <div className="container-fluid " style={{ backgroundColor: "#148cfc" }}>
      <div className="row justify-content-center">
        <div className="col-sm-5 text-light p-5">
          <h6>Support Portals</h6>
          <p className="mb-3 mt-5">
            Search for an answer or browse help topics to create a ticket
          </p>
          <input type="search" name="" id="" className="px-5 py-2"/> <br />
          <span className="text-light text-decoration-underline fs-6">
            <a href="" className="text-light me-3" style={{fontSize:"13px"}}>Track account opening</a>
            <a href="" className="text-light me-3" style={{fontSize:"13px"}} >Track segment activation</a><br />
            <a href="" className="text-light me-3" style={{fontSize:"13px"}}>Intraday margins</a> 
            <a href="" className="text-light me-3" style={{fontSize:"13px"}}>Kite user manual </a>
          </span>
        </div>
        <div className="col-sm-5 p-5 text-light">
          <a href="" className="text-light text-decoration-underline">Track tickets</a>
          <h6 className="mb-3 mt-5">Featured</h6>
          <ol>
            <li>
              <a href="" className="text-light">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" className="text-light">Current Takeovers and Delisting - January 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
