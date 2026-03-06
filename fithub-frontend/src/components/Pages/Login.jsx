import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate, Link } from "react-router";
import Button from "../reusable/Button";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Toggles password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Sends login request to backend, and updates auth state on success
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setError("Invalid username or password");
        return;
      }

      const userData = await response.json();

      // On successful login, updates auth context with user data and navigates to home page
      auth.login(userData);
      navigate("/");
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="login-container">
      <h2>Log into FitHub</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <label className="show-password">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={togglePassword}
          />
          Show Password
        </label>

        <Button text="Login" type="submit" className="login" />

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;