import "./Login.css";
import "./Login.css";

import axios from "axios";
import { useAtom } from "jotai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "src/atoms/navbar/Navbar";

import {
  userEmailAtom,
  userNameAtom,
  userPasswordAtom,
} from "../../utils/Atom";
const Login = () => {
  const [tempEmail, setTempEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const [userEmail, setUserEmail] = useAtom(userEmailAtom);
  const [userPassword, setUserPassword] = useAtom(userPasswordAtom);
  const [name, setUserName] = useAtom(userNameAtom);
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
    const res = await api.post("/auth/login", data).then((res) => {
      if (res.status === 200) {
        navigate("/");
        setUserEmail(tempEmail);
        setUserPassword(tempPassword);
        setUserName("이름");
        console.log("login success");
      }
    });
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
          onChange={(e) => setTempEmail(e.target.value)}
        />
      </div>
      <div className="form-container">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setTempPassword(e.target.value)}
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
