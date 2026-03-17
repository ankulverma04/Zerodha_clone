import { useState } from "react";

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-sm-10">
          {/* Tabs */}
          <div style={{ display: "flex", gap: "50px", cursor: "pointer" }}>
            <h4
              onClick={() => setActiveTab("equity")}
              className={activeTab === "equity" ? "active" : ""}
            >
              Equity
            </h4>
            <h4
              onClick={() => setActiveTab("currency")}
              className={activeTab === "currency" ? "active" : ""}
            >
              Currency
            </h4>
            <h4
              onClick={() => setActiveTab("commodity")}
              className={activeTab === "commodity" ? "active" : ""}
            >
              Commodity
            </h4>
          </div>

          {/* Table */}

          {activeTab === "equity" && (
            <table
              border="1"
              className="table table-bordered table-striped text-muted pricing-table"
              style={{ fontSize: "14px" }}
            >
              <tr>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
              </tr>
            </table>
          )}

          {activeTab === "currency" && (
            <table
              border="1"
              className="table table-bordered table-striped text-muted pricing-table"
              style={{ fontSize: "14px" }}
            >
              <tr>
                <th></th>
                <th>Currency futures</th>
                <th>Currency options</th>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT </td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>
                  {" "}
                  MCX: 0.0021% <br /> NSE: 0.0001%
                </td>
                <td>
                  MCX: 0.0418% <br /> NSE: 0.001%
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td> ₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </table>
          )}

          {activeTab === "commodity" && (
            <table
              border="1"
              className="table table-bordered table-striped text-muted pricing-table"
              style={{ fontSize: "14px" }}
            >
              <tr>
                <th></th>
                <th>Currency futures</th>
                <th>Currency options</th>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT </td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>
                  {" "}
                  MCX: 0.0021% <br /> NSE: 0.0001%
                </td>
                <td>
                  MCX: 0.0418% <br /> NSE: 0.001%
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td> Agri: <br /> ₹1 / crore <br /> Non-agri: <br /> ₹10 / crorer</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </table>
          )}
        </div>
      </div>
    </div>



  );
}
