import "./App.css";

//import ReactGA from "react-ga";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/login/Login";
import MainPage from "./pages/mainPage/MainPage";
import Signup from "./pages/signup/SignUp";
import Layout from "./template/layout/Layout";

//const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID || "";
//ReactGA.initialize(gaTrackingId, { debug: true });
//ReactGA.pageview(window.location.pathname);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
// import "./App.css";

// //import ReactGA from "react-ga";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Login from "./pages/login/Login";
// import MainPage from "./pages/mainPage/MainPage";
// import Signup from "./pages/signup/SignUp";

// //const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID || "";
// //ReactGA.initialize(gaTrackingId, { debug: true });
// //ReactGA.pageview(window.location.pathname);

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<MainPage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
