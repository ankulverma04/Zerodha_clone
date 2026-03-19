import { useState } from "react";
import { api, setToken } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
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
  };

  return (
    <div className="container py-4" style={{marginTop:"20vh"}}>
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
