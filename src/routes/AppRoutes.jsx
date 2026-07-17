import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import PersonalTrainer from "../pages/PersonalTrainer/PersonalTrainer";
import Membership from "../pages/MemberShip/Membership";


import Contact from "../pages/Contact/Contact";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-trainer" element={<PersonalTrainer />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;