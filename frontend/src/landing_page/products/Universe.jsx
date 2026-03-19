import React from "react";
import {useNavigate} from "react-router-dom"

// import your images
import zerodha from "../../assets/images/zerodhaFundhouse.png";
import sensibull from "../../assets/images/sensibullLogo.svg";
import tijori from "../../assets/images/tijori.svg";
import streak from "../../assets/images/streakLogo.png";
import smallcase from "../../assets/images/smallcaseLogo.png";
import ditto from "../../assets/images/dittoLogo.png";

const PartnersGallery = () => {
  const navigate=useNavigate()
  const partners = [
    {
      img: zerodha,
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: sensibull,
      desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      img: tijori,
      desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      img: streak,
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      img: smallcase,
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      img: ditto,
      desc: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <section className="partners-section py-5">
      <p className="text-center mt-5 mb-5 text-muted fs-4">
        Want to know more about our technology stack? Check out the{" "}
        <a href="https://zerodha.tech/">Zerodha.tech</a> blog.
      </p>
       
      <h3 className="text-center mt-5">The Zerodha Universe</h3>
      <p className="text-center ">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="container mt-5 p-5">
        <div className="row gap-5 justify-content-center">
          {partners.map((item, index) => (
            <div className=" col-sm-6 col-md-6 col-lg-4 text-center" key={index}>
              <div className="partner-card p-3">
                <img
                  src={item.img}
                  alt="partner"
                  className="img-fluid partner-logo mb-3"
                />
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-5">
          <button className="btn btn-primary px-2 py-2"
          onClick={()=>navigate("/SignUp")}>
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersGallery;
