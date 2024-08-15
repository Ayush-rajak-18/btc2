import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import CreatePassword from "./pages/CreatePassword"; 
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/create-password" element={<CreatePassword />} /> 
        <Route path="/Forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
