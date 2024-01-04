import "./App.css";

import ReactGA from "react-ga";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
//import { useState } from "react";
//import { useTranslation } from "react-i18next";
//import styled from "styled-components";
import Main from "./pages/main/main";
// const ReadTheDocs = styled.p`
//   color: #888;
// `;
const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID || "";
ReactGA.initialize(gaTrackingId, { debug: true });
ReactGA.pageview(window.location.pathname);

function App() {
  //const [count, setCount] = useState(0);
  //const { t } = useTranslation("main");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
