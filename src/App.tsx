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
import Sell from "./pages/sell/Sell";
import ListingForm from "./pages/listing-form/ListingForm";
import Listing from "./pages/listing/Listing";

import Search from "./pages/advanced-search/Search";

export default function App() {
  return (
    <div className="">
      <ToastContainer position="bottom-left" autoClose={1500} hideProgressBar/>
      <Router>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/list" element={<List />} />
            <Route path="/advanced-search" element={<Search />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/listing-form" element={<ListingForm />} />
            <Route path="/listing/:id" element={<Listing />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
