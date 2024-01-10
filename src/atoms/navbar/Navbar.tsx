import axios from "axios";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import {
  userEmailAtom,
  userNameAtom,
  userPasswordAtom,
  userTokenAtom,
} from "src/utils/Atom";
const Navbar = () => {
  const navigate = useNavigate();
  const [userPassword, setUserPassword] = useAtom(userEmailAtom);
  const [userEmail, setUserEmail] = useAtom(userPasswordAtom);
  const [userToken, setUserToken] = useAtom(userTokenAtom);
  const [userName, setUserName] = useAtom(userNameAtom);
  const handleLogin = () => {
    console.log("Login");
    navigate("/login");
  };
  const handleLogo = () => {
    console.log("Logo");
    navigate("/");
  };
  const handleLogout = async () => {
    console.log("Logout");
    const api = axios.create({
      baseURL: "/api",
      withCredentials: true,
    });
    console.log(userToken);
    const res = await api
      .post("/my/sign-out", {
        headers: { authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        if (res.status === 200) {
          setUserName("");
          setUserPassword("");
          setUserEmail("");
          setUserToken("");
          navigate("/");
          console.log("logout");
        }
      });
  };
  return (
    <>
      <div
        className="navbar-logo"
        style={{
          height: "30px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontSize: "1.7rem",
          background: "lightblue",
        }}
      >
        <div style={{ marginRight: "auto" }} onClick={handleLogo}>
          레전드해결책
        </div>
        <div style={{ marginLeft: "auto" }}>
          {/* name이 비어있지 않으면 name을 보여주는 부분 */}
          {userName !== "" && (
            <div onClick={handleLogout}>로그아웃{userName}</div>
          )}

          {/* login 버튼, name이 비어있을 때만 클릭 가능하도록 설정 */}
          {userName === "" && (
            <div style={{ marginLeft: "auto" }} onClick={handleLogin}>
              로그인
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
