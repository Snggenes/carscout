import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Favorites from "./pages/favorites/Favorites";
import Profile from "./pages/profile/Profile";
import List from "./pages/list/List";

export default function App() {
  return (
    <div className="relative">
      <ToastContainer position="top-center" />
      <Router>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/list/:brand/:model/:price/:year" element={<List />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
