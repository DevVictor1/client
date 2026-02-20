import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
const [form, setForm] = useState({
    name: "",
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

        <button className="btn btn-primary" type="submit">
          Create Account
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
