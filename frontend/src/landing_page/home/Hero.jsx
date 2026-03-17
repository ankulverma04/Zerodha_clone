import React from "react";
import homeHero from "../../assets/images/homeHero.png";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate=useNavigate()
  return (
    <div className="container p-4 ">
      <div className="row g-0 justify-content-center mt-5 pt-5" >
        <div className="col-8 mb-5">
          <img src={homeHero} alt="homeimg" className="img-fluid w-100" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 col-sm-6 text-center">
            <h2>Invest is everything</h2>
            <p className="fs-6 text-muted">Online platform to invest in stocks,derivatives,mutual funds and more</p>
             <button className="border-0 btn btn-primary px-5 py-2 fs-6" onClick={()=>navigate("/SignUp")}>SignUp Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
