import { useState } from "react";

const Signup = () => {
const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
});

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // later → send to backend
};

return (
    <div className="container">
        <h1>📝 Signup</h1>

    <form onSubmit={handleSubmit} style={formStyle}>
        <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Create Account</button>
        </form>
    </div>
);
}

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px"
};

export default Signup;