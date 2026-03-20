import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";


export default function Register() {
  const [loading,setLoading]=useState(false);
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
   setLoading(true)
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
    finally{
       setLoading(false);
    }
  };

  return (
    
    <div className="container py-4" style={{marginTop:"20vh"}}>
      {loading && (
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
