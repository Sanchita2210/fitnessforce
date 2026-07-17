import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsappSquare,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">


          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold">
              FIT<span className="text-[#B76E3C]">FORCE</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Transform your body, improve your strength,
              and build a healthier lifestyle with expert
              trainers and modern equipment.
            </p>


            {/* Social Icons */}
            <div className="flex gap-4 mt-7">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#B76E3C] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#B76E3C] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#B76E3C] transition"
              >
                <FaWhatsappSquare />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center hover:bg-[#B76E3C] transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>



          {/* Quick Links */}

<div>
  <h3 className="text-3xl font-bold mb-8">
    Quick Links
  </h3>

  <ul className="space-y-5 text-gray-400">

    <li>
      <Link
        to="/"
        className="hover:text-[#B76E3C] transition"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        to="/personal-trainer"
        className="hover:text-[#B76E3C] transition"
      >
        Personal Trainers
      </Link>
    </li>

    <li>
      <Link
        to="/membership"
        className="hover:text-[#B76E3C] transition"
      >
        Membership
      </Link>
    </li>

    <li>
      <Link
        to="/contact"
        className="hover:text-[#B76E3C] transition"
      >
        Contact
      </Link>
    </li>

  </ul>
</div>



          {/* Programs */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Programs
            </h3>


            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-[#B76E3C] transition cursor-pointer">
                Strength Training
              </li>

              <li className="hover:text-[#B76E3C] transition cursor-pointer">
                Boxing
              </li>

              <li className="hover:text-[#B76E3C] transition cursor-pointer">
                Cardio
              </li>

              <li className="hover:text-[#B76E3C] transition cursor-pointer">
                Yoga
              </li>

              <li className="hover:text-[#B76E3C] transition cursor-pointer">
                Personal Training
              </li>

            </ul>

          </div>




          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact Us
            </h3>


            <div className="space-y-5 text-gray-400">


              <div className="flex gap-4 items-start">

                <FaMapMarkerAlt className="text-[#B76E3C] mt-1" />

                <p>
                  Kathmandu, Nepal
                </p>

              </div>


              <div className="flex gap-4 items-center">

                <FaPhone className="text-[#B76E3C]" />

                <p>
                  +977 98XXXXXXXX
                </p>

              </div>


              <div className="flex gap-4 items-center">

                <FaEnvelope className="text-[#B76E3C]" />

                <p>
                  info@fitforce.com
                </p>

              </div>


            </div>

          </div>


        </div>

      </div>



      {/* Bottom Bar */}
      <div className="border-t border-[#222]">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 FITFORCE. All Rights Reserved.
          </p>


          <div className="flex gap-6 text-gray-500 text-sm">

            <span className="hover:text-[#B76E3C] cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-[#B76E3C] cursor-pointer">
              Terms & Conditions
            </span>

          </div>

        </div>

      </div>


    </footer>
  );
}

export default Footer;