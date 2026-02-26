import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { ToastContext } from "../context/ToastContext";



const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.post("/api/auth/login", form);
      login(res.data.token, res.data.user);
      showToast("Login successful. Welcome back!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      showToast("Failed to log in. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container checkout-layout">
      <form className="surface form-card" onSubmit={handleSubmit}>
        <header className="page-header">
          <h1 className="page-title">Welcome Back</h1>
          <p className="page-subtitle">Log in to continue your order.</p>
        </header>

        <label className="form-group">
          <span className="form-label">Email</span>
          <input
            className="input-field"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>

        <label className="form-group">
          <span className="form-label">Password</span>
          <input
            className="input-field"
            type="password"
            placeholder="Enter your password"
            required
            autoComplete="current-password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </label>

        <button className="btn btn-primary" type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p className="page-subtitle">
          New here?{" "}
          <Link className="muted-link" to="/register">
            Create an account
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
