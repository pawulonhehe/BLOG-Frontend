import { Register } from "./Pages/Register/Register";
import { Login } from "./Pages/Login/Login";
import { Home } from "../src/Pages/Home/Home";
import { Cms } from "../src/Pages/Cms/Cms";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Views = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cms" element={<Cms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
