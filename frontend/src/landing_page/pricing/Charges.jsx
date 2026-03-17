import React from "react";
import {useNavigate} from 'react-router-dom'
const Charges = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-sm-5 charges">
            <h3>Charges explained</h3>
            <h6>Securities/Commodities transaction tax</h6>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              <br /> When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>{" "}
            <br />
            <h6>Transaction/Turnover Charges</h6>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              <br /> When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>{" "}
            <br />
            <h6>Call & trade</h6>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              <br /> When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <h6>Stamp charges</h6>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              <br /> When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <h6>NRI brokerage charges</h6>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              <br /> When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>
          <div className="col-sm-5 charges">
            <h3>Charges explained</h3>
            <h6>Securities/Commodities transaction tax</h6>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              <br /> When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>{" "}
            <br />
            <h6>Transaction/Turnover Charges</h6>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              <br /> When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>{" "}
            <br />
            <h6>Call & trade</h6>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              <br /> When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <h6>Stamp charges</h6>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              <br /> When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <h6>NRI brokerage charges</h6>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              <br /> When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>

          <div className="col-sm-10 charges mt-5">
            <h6>Disclaimer</h6>
            <p>
              For Delivery based trades, a minimum of ₹0.01 will be charged per
              contract note. Clients who opt to receive physical contract notes
              will be charged ₹20 per contract note plus courier charges.
              Brokerage will not exceed the rates specified by SEBI and the
              exchanges. All statutory and regulatory charges will be levied at
              actuals. Brokerage is also charged on expired, exercised, and
              assigned options contracts. Free investments are available only
              for our retail individual clients. Companies, Partnerships,
              Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as
              delivery brokerage. A brokerage of 0.25% of the contract value
              will be charged for contracts where physical delivery happens. For
              netted off positions in physically settled contracts, a brokerage
              of 0.1% will be charged.
            </p>
          </div>
        </div>
         {/* signup */}
          <div className="row justify-content-center mt-5 p-2">
            <div className="col-6 col-sm-6 text-center">
              <h2>Open a Zerodha Account</h2>
              <p className="fs-6 text-muted">
                Online platform to invest in stocks,derivatives,mutual funds and
                more
              </p>
              <button className="border-0 btn btn-primary px-5 py-2 fs-6"
              onClick={()=>navigate("/SignUp")}>
                SignUp Now
              </button>
            </div>
          </div>
      </div>
    </>
  );
};

export default Charges;
