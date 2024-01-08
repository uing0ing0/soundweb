import axios from "axios";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import Navbar from "src/atoms/navbar/Navbar";

import {
  userEmailAtom,
  userNameAtom,
  userPasswordAtom,
} from "../../utils/Atom";
const Signup = () => {
  const [userEmail, setUserEmail] = useAtom(userEmailAtom);
  const [userPassword, setUserPassword] = useAtom(userPasswordAtom);
  const [name, setUserName] = useAtom(userNameAtom);
  const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
  });
  const handleSignUp = async () => {
    const data = {
      email: userEmail,
      password: userPassword,
      name: name,
    };
    const res = await api.post("/auth/signup", data);
    console.log(res);
  };
  return (
    <div className="container">
      <Navbar />
      <div className="form-container">
        <input
          type="name"
          id="name"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
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
        type="button"
        onClick={() => {
          handleSignUp();
        }}
        className="form-container"
      >
        회원가입
      </button>
    </div>
  );
};

export default Signup;
