import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/logo.svg";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Column 1 - Logo & Social Media */}
          <div className="col-12 col-md-6 col-lg-3 ">
            <img
              src={logo}
              alt="Logo"
              className="mb-3"
              style={{ width: "150px" }}
            />

            <p className="text-muted small">
              ©️ 2010 - 2024, Not Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>

            <div className="d-flex gap-2 mt-2">
              <a href="#" className="text-dark fs-3">
                <TiSocialFacebook />
              </a>
              <a href="#" className="text-dark fs-3">
                <TiSocialInstagram />
              </a>
              <a href="#" className="text-dark fs-3">
                <TiSocialTwitter />
              </a>
              <a href="#" className="text-dark fs-3">
                <TiSocialLinkedin />
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div className="col-6 col-md-6 col-lg-3 foot-links">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted ">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Referral programme
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Zerodha.tech
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Press & media
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Zerodha cares (CSR)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Account */}
          <div className="col-6 col-md-6 col-lg-3 foot-links">
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Open demat account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Fund transfer
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Minor demat account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  NRI demat account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Commodity
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Dematerialisation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  MTF
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Referral program
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div className="col-6 col-md-6 col-lg-3 foot-links">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Support portal
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Z-Connect blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  List of charges
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Downloads & resources
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col f-para">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154,
              4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
              4th Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing. Attention
              investors: 1) Stock brokers can accept securities as margins from
              clients only by way of pledge in the depository system w.e.f
              September 01, 2020. 2) Update your e-mail and phone number with
              your stock broker / depository participant and receive OTP
              directly from depository on your e-mail and/or mobile number to
              create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              India's largest broker based on networth as per NSE. NSE broker
              factsheet "Prevent unauthorised transactions in your account.
              Update your mobile numbers/email IDs with your stock brokers.
              Receive information of your transactions directly from Exchange on
              your mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
            <p>
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited | IRDAI Registered Corporate
              Agent (Composite) License No CA0738) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-item-center">
          <div className="col-sm-10 d-flex  flex-wrap justify-content-center gap-4 foot-last-links ">
            <div >
              <a href="https://www.nseindia.com/" > NSE</a>
            </div>
            <div>
              <a href="https://www.bseindia.com/?"> BSE</a>
            </div>
            <div>
              <a href="https://www.mcxindia.com/"> MCX</a>
            </div>
            <div>
              <a href=""> Terms & conditions</a>
            </div>
            <div>
              <a href=""> Policies & procedures</a>
            </div>{" "}
            <div>
              <a href=""> Privacy policy</a>
            </div>
            <div>
              <a href=""> Disclosure</a>
            </div>{" "}
            <div>
              <a href=""> For investor's attention</a>
            </div>
            <div>
              <a href=""> Investor charter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
