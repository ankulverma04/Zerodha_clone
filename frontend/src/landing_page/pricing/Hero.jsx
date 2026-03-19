import react from "react";
import cardImg1 from "../../assets/images/pricing0.svg";
import cardImg2 from "../../assets/images/intradayTrades.svg";
function Hero() {
  return (
    <>
      {/* Heading &Para Section */}
      <div className="container pt-5">
        <h2 className="text-center mt-5 pt-5">Charges</h2>
        <p className="text-center fs-5 text-muted">
          List of all charges and taxes
        </p>

        {/* Price Card */}
        <div className="container px-5 py-5">
          <div className="row text-center  mt-5">
            {/* Column 1 */}
            <div className="col-md-4 mb-4">
              <img src={cardImg1} alt="" className="img-fluid w-75 pt-5" />
              <h3 className="mt-4">Free equity delivery</h3>
              <p className="text-muted mt-3">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>

            {/* Column 2 */}
            <div className="col-md-4 mb-4">
              <img src={cardImg2} alt="" className="img-fluid w-75 pt-5" />
              <h3 className="mt-4">Intraday and F&O trades</h3>
              <p className="text-muted mt-3">
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </p>
            </div>

            {/* Column 3 */}
            <div className="col-md-4 mb-4">
              <img src={cardImg1} alt="" className="img-fluid w-75 pt-5" />
              <h3 className="mt-4">Free direct MF</h3>
              <p className="text-muted mt-3">
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
