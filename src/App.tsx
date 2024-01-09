import "./App.css";

//import ReactGA from "react-ga";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Main from "./pages/main/main";
import Signup from "./pages/signup/SignUp";

//const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID || "";
//ReactGA.initialize(gaTrackingId, { debug: true });
//ReactGA.pageview(window.location.pathname);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
