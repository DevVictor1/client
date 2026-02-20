import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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

        <button className="btn btn-primary" type="submit">
          Login
        </button>

        <p className="page-subtitle">
          New here?{" "}
          <Link className="muted-link" to="/signup">
            Create an account
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
