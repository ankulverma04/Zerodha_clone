import { useState } from "react";
import { api, setToken } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
    const[load,setLoad]=useState(false)
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.email.includes("@")) return "Valid email required";
    if (!form.password) return "Password required";
    return "";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");

    const error = validate();
    if (error) return setMsg(error);
    setLoad(true)

    try {
      const res = await api.post("/api/login", form);

      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);

      setMsg("Login success ✅");
      // to dashboard project
     window.location.href = import.meta.env.VITE_DASHBOARD_URL;
    } catch (err) {
      setMsg(err.response?.data?.message || "Error ❌");
    }
    finally{
          setLoad(false)

    }
  };

  return (
    <div className="container py-4" style={{marginTop:"20vh"}}>
      {load && (
  <div style={{
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    zIndex: 9999
  }}>
    <ClipLoader size={60} color="#007bff" />
  </div>
)}
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h3 className="mb-3 text-center">Login</h3>

              <form onSubmit={handleLogin} className="d-grid gap-3">
                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="form-control"
                />

                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                  className="form-control"
                />

                <button className="btn btn-success w-100">
                  Login
                </button>
              </form>

              {msg && (
                <div className="alert alert-info mt-3 mb-0">
                  {msg}
                </div>
              )}

              <p className="text-center mt-3 mb-0">
                New user?{" "}
                <span
                  className="text-primary fw-semibold"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/signup")}
                >
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
