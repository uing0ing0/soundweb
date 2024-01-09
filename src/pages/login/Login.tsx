
import { useNavigate } from "react-router-dom";
import Navbar from "src/atoms/navbar/Navbar";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #676767;
  color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

const Find = styled.label`
  color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
  background: none;
`;

const Text = styled.p`
  font-size: 18px;
  color: black;
  font-weight: bold;
  font-family: Arial, sans-serif;
`;

const Text2 = styled.p`
  font-size: 15px;
  color: black;
  font-weight: bold;
  font-family: Arial, sans-serif;
`;

const handleLogo = () => {
  console.log("Logo");
  navigate("/main");
};


import { userEmailAtom, userPasswordAtom } from "../../utils/Atom";
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
    <Container>
      <Navbar />
      <div style={{ marginRight: "auto" }} onClick={handleLogo}>
        Logo
      </div>
      <Text>로그인하고 자신만의 레전드 해결책을 만들고 공유해보세요!</Text>
      <FormContainer>
        <Label htmlFor="email">Email:</Label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </FormContainer>
      <FormContainer>
        <Label htmlFor="password">Password:</Label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </FormContainer>

      <Button
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </Button>

      <Button
        onClick={() => {
          navigate("/signup");
        }}
      >
        Create Account
      </Button>

      <Find
        onClick={() => {
          navigate("/login");
        }}
      >
        비밀번호 찾기
      </Find>

      <Text2>운영자에게 문의하기: dev.nomini@gmail.com </Text2>

      <Find
        onClick={() => {
          navigate("/login");
        }}
      >
        개인정보 처리방침
      </Find>
    </Container>
  );
};

export default Login;
