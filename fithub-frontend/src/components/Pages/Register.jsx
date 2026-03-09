import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import Button from "../reusable/Button";

function Register() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState([]); // Array instead of string to handle multiple error messages from backend

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Sends register request to backend, and updates auth state on success
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]);

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const message = await response.json(); //Backend should return { message: "Error message" } on failure
        setError(Object.values(message) || ["Request failed"]);
        return;
      }

      const userData = await response.json();

      auth.login(userData);
      navigate("/");
    } catch (err) {
      setError(["Server error"]);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      {error.length > 0 && (
        <ul className="error-list">
          {error.map((err, index) => (
            <li key={index}>{err}</li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password (min 8 characters)"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label className="show-password">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>

        <Button text="Register" type="submit" className="submit" />

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
