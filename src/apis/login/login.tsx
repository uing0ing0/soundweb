import axios from "axios";
import { useAtom } from "jotai";
import React from "react";

import { userEmailAtom, userPasswordAtom } from "../../utils/Atom";
import { HOST } from "../../utils/Enums";
const Login = () => {
  const [userEmail, setUserEmail] = useAtom(userEmailAtom);
  const [userPassword, setUserPassword] = useAtom(userPasswordAtom);

  const handleLogin = async () => {
    const data = {
      email: userEmail,
      password: userPassword,
    };
    const res = await axios.post(`${HOST.address}/auth/login`, data);
    console.log(res);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;
