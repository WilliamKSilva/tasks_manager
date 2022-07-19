import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
      
      </Route>
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}