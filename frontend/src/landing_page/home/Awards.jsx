import React from "react";
import awardImg from "../../assets/images/largestBroker.svg";
import pressLogo from '../../assets/images/pressLogos.png';
function Awards() {
  return (
    <div className="container p-5">
      <div className="row mt-4 jutify-content-center">
        <div className="col-12 col-sm-6 col-lg-6 mb-4">
          <img src={awardImg} alt="AWArdImg" className="img-fluid" />
        </div>
        <div className="col-12 col-sm-6 col-lg-6 mt-4 ">
          <h2 className="text-center">Largest stock broker in India</h2>
          <p className="mb-5 text-center">
            2+ million Zerodha clients contribute to over 15% of all retail
            order valumes in India daily by trading and investing in:
          </p>
          <div className="row mt-3">
            <div className="col-sm-6 col-6">
                <ul>
            <li>
                <p>Future and Options</p>
            </li>
            <li>
                <p>Commondity derivatives</p>
            </li>
            <li>
                <p>Currency derivatives</p>
            </li>
          </ul>
            </div>
            <div className="col-sm-6 col-6">
                <ul>
            <li>
                <p>Future and Options</p>
            </li>
            <li>
                <p>Commondity derivatives</p>
            </li>
            <li>
                <p>Currency derivatives</p>
            </li>
          </ul>
            </div>
          </div>
          <img src={pressLogo} alt="PressLogo" className="img-fluid w-75"/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
