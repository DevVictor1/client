import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { ToastContext } from "../context/ToastContext";

const Signup = () => {
const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
});
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.post("/api/auth/register", form);
      showToast("Account created successfully. Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      showToast("Failed to register. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container checkout-layout">
      <form className="surface form-card" onSubmit={handleSubmit}>
        <header className="page-header">
          <h1 className="page-title">Create Account</h1>
          <p className="page-subtitle">
            Sign up to save your details and place orders faster.
          </p>
        </header>

        <label className="form-group">
          <span className="form-label">Full Name</span>
          <input
            className="input-field"
            type="text"
            placeholder="Jane Doe"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>

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
            placeholder="Create a strong password"
            required
            autoComplete="new-password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </label>

        <button className="btn btn-primary" type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Account"}
        </button>

        <p className="page-subtitle">
          Already have an account?{" "}
          <Link className="muted-link" to="/login">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
