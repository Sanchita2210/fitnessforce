import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaDumbbell } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (path) =>
    `relative text-[15px] font-medium transition duration-300 hover:text-[#B76E3C] ${
      location.pathname === path ? "text-[#B76E3C]" : "text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto h-16 px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-[#B76E3C] text-3xl">
          <FaDumbbell />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className={navLink("/")}>
            Home
          </Link>

          <Link
            to="/personal-trainer"
            className={navLink("/personal-trainer")}
          >
            Personal Trainer
          </Link>

          <Link
            to="/membership"
            className={navLink("/membership")}
          >
            Membership
          </Link>

          <Link
            to="/contact"
            className={navLink("/contact")}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">

          {/* Desktop Join Button */}
          <Link
            to="/membership#membership-form"
            className="hidden md:block bg-[#B76E3C] hover:bg-[#9B5F34] text-white text-sm font-semibold px-5 py-2 rounded-full transition"
          >
            Join Now
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:text-[#B76E3C]"
          >
            Home
          </Link>

          <Link
            to="/personal-trainer"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:text-[#B76E3C]"
          >
            Personal Trainer
          </Link>

          <Link
            to="/membership"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:text-[#B76E3C]"
          >
            Membership
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-white hover:text-[#B76E3C]"
          >
            Contact
          </Link>

          <Link
            to="/membership#membership-form"
            onClick={() => setMenuOpen(false)}
            className="block mx-6 mt-2 mb-5 bg-[#B76E3C] hover:bg-[#9B5F34] text-white text-center py-3 rounded-full font-semibold transition"
          >
            Join Now
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;