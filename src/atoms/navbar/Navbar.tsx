import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        console.log("Login");
        navigate("/login");
    }
    const handleLogo = () => {
        console.log("Logo");
        navigate("/");
    }
  return (
    <>
        <div className="navbar-logo" style={{height:"30px",width:"100%",display: "flex", flexDirection: "row", alignItems: "center", fontSize:"1.7rem", background:"lightblue"}}>
        <div style={{ marginRight: "auto" }} onClick={handleLogo}>Logo</div>
        <div style={{ marginLeft: "auto" }} onClick={handleLogin}>Login</div>
        </div>
    </>
  );
};

export default Navbar;