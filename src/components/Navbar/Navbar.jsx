import { Link, useLocation } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const navLink = (path) =>
    `relative transition duration-300 hover:text-[#B76E3C] ${
      location.pathname === path
        ? "text-[#B76E3C]"
        : "text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-[#B76E3C] text-3xl flex-shrink-0"
        >
          <FaDumbbell />
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[13px] sm:text-[15px] font-medium">

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

        {/* Join Button */}
        <Link
          to="/membership#membership-form"
          className="bg-[#B76E3C] hover:bg-[#9B5F34] text-white text-[12px] sm:text-sm font-semibold px-5 py-2 rounded-full transition whitespace-nowrap"
        >
          Join Now
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;