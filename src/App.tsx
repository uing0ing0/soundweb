import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//import { useState } from "react";
//import { useTranslation } from "react-i18next";
//import styled from "styled-components";
import Main from "./pages/main/main";
import Login from "./pages/login/Login";
// const ReadTheDocs = styled.p`
//   color: #888;
// `;

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
