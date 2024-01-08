import "./Login.css";

import axios from "axios";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import Navbar from "src/atoms/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { userEmailAtom, userPasswordAtom } from "../../utils/Atom";
import { HOST } from "../../utils/Enums";
const Login = () => {
  const [userEmail, setUserEmail] = useAtom(userEmailAtom);
  const [userPassword, setUserPassword] = useAtom(userPasswordAtom);
  const navigate = useNavigate();
  const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
  });
  const handleLogin = async () => {
    const data = {
      email: userEmail,
      password: userPassword,
    };
    const res = await api.post("/auth/login", data);
    console.log(res);
  };
  return (
    <div className="container">
      <Navbar />
      <div className="form-container">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div className="form-container">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        onClick={() => {
          handleLogin();
        }}
        className="form-container"
      >
        Login
      </button>

      <button
        type="button"
        onClick={() => {
          navigate("/signup");
        }}
        className="form-container"
      >
        Create Account
      </button>
    </div>
  );
};

export default Login;
