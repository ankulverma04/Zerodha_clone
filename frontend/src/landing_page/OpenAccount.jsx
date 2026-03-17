import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate=useNavigate()
  return (
    <div className="container p-4">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 text-center">
          <h2>Open a Zerodha Account</h2>
          <p className="fs-6 text-muted">
            Modern platform and apps,₹0 investments and flat ₹20 intraday and
            F&Q
          </p>
          <button className="border-0 btn btn-primary px-5 py-2 fs-6"
          onClick={()=>navigate("/SignUp")}>
            SignUp Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
