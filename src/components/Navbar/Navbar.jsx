import { FaDumbbell } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navLink = (path) =>
    `relative text-[15px] font-medium transition duration-300 hover:text-[#B76E3C]
    ${
      location.pathname === path
        ? "text-[#B76E3C]"
        : "text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto h-16 px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}

<Link
  to="/"
  className="text-[#B76E3C] text-3xl flex items-center"
>
  <FaDumbbell className="-rotate-180" />
</Link>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-10">

          <Link
            to="/"
            className={navLink("/")}
          >
            Home

            {location.pathname === "/" && (
              <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-[#B76E3C] rounded-full"></span>
            )}

          </Link>

          <Link
            to="/personal-trainer"
            className={navLink("/personal-trainer")}
          >
            Personal Trainer

            {location.pathname === "/personal-trainer" && (
              <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-[#B76E3C] rounded-full"></span>
            )}

          </Link>

          <Link
            to="/membership"
            className={navLink("/membership")}
          >
            Membership

            {location.pathname === "/membership" && (
              <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-[#B76E3C] rounded-full"></span>
            )}

          </Link>

          <Link
            to="/contact"
            className={navLink("/contact")}
          >
            Contact

            {location.pathname === "/contact" && (
              <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-[#B76E3C] rounded-full"></span>
            )}

          </Link>

        </div>

        {/* Join Button */}

        <Link
  to="/membership#membership-form"
  className="bg-[#B76E3C] hover:bg-[#9B5F34] text-white text-sm font-semibold px-5 py-2 rounded-full transition"
>
  Join Now
</Link>

      </div>

    </nav>
  );
}

export default Navbar;