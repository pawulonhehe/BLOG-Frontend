import { Register } from "./Pages/Register/Register";
import { Login } from "./Pages/Login/Login";
import { Home } from "../src/Pages/Home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Views = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
