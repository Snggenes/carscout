import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Favorites } from "./components/account/Favorites";
import { Appointments } from "./components/account/Appointments";
import { Searches } from "./components/account/Searches";
import { Listings } from "./components/account/Listings";
import { Notifications } from "./components/account/Notifications";
import { Settings } from "./components/account/Settings";
import { RemoveAccount } from "./components/account/RemoveAccount";
import Account from "./pages/account/Account";
import List from "./pages/list/List";
import Sell from "./pages/sell/Sell";
import ListingForm from "./pages/listing-form/ListingForm";
import Listing from "./pages/listing/Listing";
import Magazine from "./pages/magazine/Magazine";

import Search from "./pages/advanced-search/Search";

export default function App() {
  return (
    <div className="">
      <ToastContainer position="bottom-left" autoClose={1500} hideProgressBar />
      <Router>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/list" element={<List />} />
            <Route path="/advanced-search" element={<Search />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/listing-form" element={<ListingForm />} />
            <Route path="/listing/:id" element={<Listing />} />
            <Route path="/account" element={<Account />}>
              <Route path="appointments" element={<Appointments />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="listings" element={<Listings />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="searches" element={<Searches />} />
              <Route path="settings" element={<Settings />} >
                <Route path="remove-account" element={<RemoveAccount />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
