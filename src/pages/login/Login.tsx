import "./Login.css";

import { useNavigate } from "react-router-dom";
import Navbar from "src/atoms/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Navbar />
      <div className="form-container">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-container">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        onClick={() => {
          navigate("/login");
        }}
        className="form-container"
      >
        Login
      </button>

      <button
        type="button"
        onClick={() => {
          navigate("/login");
        }}
        className="form-container"
      >
        Create Account
      </button>
    </div>
  );
};

export default Login;
