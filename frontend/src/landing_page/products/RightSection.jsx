import React from "react";
import appstoreImg from "../../assets/images/appstoreBadge.svg";
import googleplayImg from "../../assets/images/googleplayBadge.svg";

function RightSection({
  imageUrl,
  productname,
  productDiscription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-1"></div>

        <div className="col-12 col-sm-4 p-4 text-center text-sm-start">
          <h2>{productname}</h2>
          <p>{productDiscription}</p>

          <div className="d-flex gap-5 justify-content-center justify-content-sm-start mb-3">
            <a href={learnMore}>Learn More →</a>
          </div>
        </div>

        <div className="col-12 col-sm-5 p-4 text-center">
          <img src={imageUrl} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
