import React from "react";

const PriceTable = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center ">
          <div className="col-sm-10">
            <h3 className="text-muted mb-3">Charges for account opening</h3>
            <table
              border="1"
              className="table table-bordered table-striped text-muted pricing-table"
              style={{ fontSize: "14px" }}
            >
              <tr>
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
              <tr>
                <td>Online account</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>offline account</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>₹ 500</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      {/* Table-2 */}

      <div className="container mt-5">
        <div className="row justify-content-center ">
          <div className="col-sm-10">
            <h3 className="text-muted mb-3">
              Demat AMC (Annual Maintenance Charge)
            </h3>
            <table
              border="1"
              className="table table-bordered table-striped text-muted pricing-table"
              style={{ fontSize: "14px" }}
            >
              <tr>
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
              <tr>
                <td>Online account</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>offline account</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>₹ 500</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      {/* Table-3 */}
      <div className="container mt-5">
        <div className="row justify-content-center ">
          <div className="col-sm-10">
            <h3 className="text-muted mb-3">
              Charges for optional value added services
            </h3>
            <table
              border="1"
              className="table table-bordered table-striped text-muted pricing-table"
              style={{ fontSize: "14px" }}
            >
              <tr>
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
              <tr>
                <td>Online account</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>offline account</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>₹ 500</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceTable;
