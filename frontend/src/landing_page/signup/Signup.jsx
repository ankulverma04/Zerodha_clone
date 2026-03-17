import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Name required";
    if (!form.email.includes("@")) return "Valid email required";
    if (form.password.length < 6) return "Password min 6 chars";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    const error = validate();
    if (error) return setMsg(error);

    const Data = {
      name:form.name,
      email:form.email,
      password:form.password
    }
    try {
      const res = await api.post("/api/signup", Data);
      setMsg(res.data.message + " ✅");
      navigate("/login");
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
              <h3 className="mb-3 text-center">Register</h3>

              <form onSubmit={handleSubmit} className="d-grid gap-3">
                <input
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  className="form-control"
                />

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

                <button className="btn btn-primary w-100">
                  Create Account
                </button>
              </form>

              {msg && (
                <div className="alert alert-info mt-3 mb-0">
                  {msg}
                </div>
              )}

              <p className="text-center mt-3 mb-0">
                Already have an account?{" "}
                <span
                  style={{ cursor: "pointer" }}
                  className="text-primary fw-semibold"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
