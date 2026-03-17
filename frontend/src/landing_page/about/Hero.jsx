import React from "react";
import Ceo from '../../assets/images/nithin-kamath.jpg'
function Hero() {
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-sm-8">
          <div className="row mt-5 mb-5 pb-5">
            <div className="col-sm-6 aboutPara">
              <p>
                We kick-started operations on the 15th of August, 2010 with the
                goal of breaking all barriers that traders and investors face in
                India in terms of cost, support, and technology. We named the
                company Zerodha, a combination of Zero and "Rodha", the Sanskrit
                word for barrier. <br />
              </p>
              <p>
                Today, our disruptive pricing models and in-house technology
                have made us the biggest stock broker in India.
              </p>

              <br />
              <p>
                Over 1.6+ crore clients place billions of orders every year
                through our powerful ecosystem of investment platforms,
                contributing over 15% of all Indian retail trading volumes.
              </p>
            </div>
            <div className="col-sm-6 aboutPara">
              <p>
                In addition, we run a number of popular open online educational
                and community initiatives to empower retail traders and
                investors. <br />
              </p>
              <p>
                Rainmatter, our fintech fund and incubator, has invested in
                several fintech startups with the goal of growing the Indian
                capital markets.
              </p>
              <br />
              <p>
                And yet, we are always up to something new every day. Catch up
                on the latest updates on our blog or see what the media is
                saying about us or learn more about our business and product
                philosophies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile sec.. */}
      <div className="row justify-content-center">
        <h2 className="text-center mb-5">People</h2>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-5 text-center">
                <img src={Ceo} alt="CeoImg" style={{width:"90%"}} className="rounded-circle mb-3"/>
                <h4>Nitin Kamath</h4>
                <p>Founder CEO</p>
            </div>
            <div className="col-sm-7 mt-5 aboutPara">
              <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
              </p>
              <p>
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p>Playing basketball is his zen.</p>
              <p>
                Connect on <a href="https://nithinkamath.me/">Homepage</a> /<a href="https://tradingqna.com/u/nithin/summary">TradingQnA</a>/
                <a href="https://x.com/Nithin0dha">Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
