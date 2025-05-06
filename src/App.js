import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Navbar/Pages/Home';
import About from './Component/Navbar/Pages/About';
import Services from './Component/Navbar/Pages/Services';
import Contact from './Component/Navbar/Pages/Contact';

import ButcherBooking from './Component/Navbar/Pages/ButcherBooking';
import MeatDonation from './Component/Navbar/Pages/MeatDonation';
import PriceEstimator from './Component/Navbar/Pages/PriceEstimator';
import GarbageCollector from './Component/Navbar/Pages/GarbageCollector';
import BookButcherForm from './Component/Navbar/Pages/BookButcherForm';
import Register from './Component/Navbar/Pages/Register';
import ButcherEnrollment from './Component/Navbar/Pages/ButcherEnrollment';
import SellerEnrollment from './Component/Navbar/Pages/SellerEnrollment';
import ReviewForm from './Component/Navbar/Pages/ReviewForm';

import Marketplace from './Component/Navbar/Pages/Marketplace';

import ItemDetails from './Component/Navbar/Pages/ItemDetails'; // Import ItemDetails page

function AppContent() {
  const location = useLocation();
  const hideNavbarOnPaths = ['/']; // Navbar is hidden only on Register page

  return (
    <>
      {!hideNavbarOnPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/review' element={<ReviewForm serviceType="general" />} />
        <Route path='/butcher-booking' element={<ButcherBooking />} />
        <Route path='/meat-donation' element={<MeatDonation />} />
        <Route path='/price-estimator' element={<PriceEstimator />} />
        <Route path='/garbage-collector' element={<GarbageCollector />} />
        <Route path='/book-butcher' element={<BookButcherForm />} />
        <Route path='/butcher-enroll' element={<ButcherEnrollment />} />
        <Route path='/seller-enroll' element={<SellerEnrollment />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/item-details/:id' element={<ItemDetails />} /> {/* Route for ItemDetails page */}
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
