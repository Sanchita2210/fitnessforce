import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer";

import hero from "../../assets/contact/hero.jpg";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0B0B0B] text-white">

        {/* ================= HERO ================= */}

        <section className="relative h-[650px] overflow-hidden">

          <img
            src={hero}
            alt="Contact Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center">

            <div>

              <h1 className="text-6xl md:text-7xl font-bold text-[#B76E3C]">
                Contact Us
              </h1>

              <p className="text-gray-300 text-lg leading-8 mt-6 max-w-lg">
                Have questions about memberships, personal training,
                or our fitness programs? We'd love to hear from you.
              </p>

              <button className="mt-10 border border-[#B76E3C] text-[#B76E3C] hover:bg-[#B76E3C] hover:text-white transition px-10 py-4 rounded-xl font-semibold">
                Make Call
              </button>

            </div>

          </div>

        </section>

        {/* ================= CONTACT CARDS ================= */}

        <section className="py-12">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid md:grid-cols-2 gap-10">

              {/* Call */}

              <div className="text-center">

                <h2 className="text-xl font-bold mb-5">
                  Call Us
                </h2>

                <div className="w-full max-w-[350px] h-20 mx-auto border border-[#B76E3C] rounded-xl flex items-center justify-center gap-4">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 5.5C3 4.67 3.67 4 4.5 4h2.55c.67 0 1.26.45 1.43 1.1l.78 3.1a1.5 1.5 0 01-.43 1.46l-1.4 1.4a16 16 0 006.57 6.57l1.4-1.4a1.5 1.5 0 011.46-.43l3.1.78c.65.17 1.1.76 1.1 1.43v2.55c0 .83-.67 1.5-1.5 1.5h-1C10.52 22 2 13.48 2 3.5v-1z"
                    />
                  </svg>

                  <p className="text-xl font-semibold">
                    +977-9800000000
                  </p>

                </div>

              </div>

              {/* Email */}

              <div className="text-center">

                <h2 className="text-xl font-bold mb-5">
                  Email Us
                </h2>

                <div className="w-full max-w-[350px] h-20 mx-auto border border-[#B76E3C] rounded-xl flex items-center justify-center gap-4">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 8l8.3 5.2a1.4 1.4 0 001.4 0L21 8m-18 9h18a1 1 0 001-1V8a2 2 0 00-2-2H4a2 2 0 00-2 2v8a1 1 0 001 1z"
                    />
                  </svg>

                  <p className="text-xl font-semibold">
                    fitness.force@gmail.com
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= CONTACT FORM ================= */}

        <section className="pb-24">

          <div className="max-w-6xl mx-auto px-6 lg:px-8">

            <div className="bg-[#111111] border border-[#B76E3C] rounded-2xl p-12">

              <p className="uppercase tracking-[4px] text-[#B76E3C] font-semibold">
                GET IN TOUCH
              </p>

              <h2 className="text-5xl font-bold mt-4">
                We'd Love To Hear From You!
              </h2>

              <p className="text-gray-400 mt-6 max-w-3xl leading-8">
                Have questions about memberships, personal training,
                or our fitness programs? Fill out the form below and
                we'll get back to you as soon as possible.
              </p>

              {/* PERSONAL INFORMATION */}

              <div className="mt-14">

                <h3 className="text-2xl font-bold mb-8">
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block text-gray-400 mb-3">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full bg-transparent border border-[#2B2B2B] rounded-lg px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#B76E3C]"
                    />

                  </div>

                  <div>

                    <label className="block text-gray-400 mb-3">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent border border-[#2B2B2B] rounded-lg px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#B76E3C]"
                    />

                  </div>

                  <div>

                    <label className="block text-gray-400 mb-3">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="w-full bg-transparent border border-[#2B2B2B] rounded-lg px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#B76E3C]"
                    />

                  </div>

                  <div>

                    <label className="block text-gray-400 mb-3">
                      Preferred Contact Method
                    </label>

                    <select
                      defaultValue=""
                      className="w-full bg-[#111111] border border-[#2B2B2B] rounded-lg px-5 py-4 text-gray-400 outline-none focus:border-[#B76E3C]"
                    >

                      <option value="" disabled>
                        Select a method
                      </option>

                      <option>Email</option>
                      <option>Phone Call</option>
                      <option>WhatsApp</option>

                    </select>

                  </div>

                </div>

              </div>
                            {/* ================= INQUIRY DETAILS ================= */}

              <div className="mt-14">

                <h3 className="text-2xl font-bold mb-8">
                  Inquiry Details
                </h3>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block text-gray-400 mb-3">
                      Subject *
                    </label>

                    <input
                      type="text"
                      placeholder="Enter subject"
                      className="w-full bg-transparent border border-[#2B2B2B] rounded-lg px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#B76E3C]"
                    />

                  </div>

                  <div>

                    <label className="block text-gray-400 mb-3">
                      Interested In
                    </label>

                    <select
                      defaultValue=""
                      className="w-full bg-[#111111] border border-[#2B2B2B] rounded-lg px-5 py-4 text-gray-400 outline-none focus:border-[#B76E3C]"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option>Gym Membership</option>
                      <option>Personal Training</option>
                      <option>Group Classes</option>
                      <option>Nutrition Coaching</option>
                      <option>General Inquiry</option>

                    </select>

                  </div>

                  <div>

                    <label className="block text-gray-400 mb-3">
                      Preferred Contact Time
                    </label>

                    <select
                      defaultValue=""
                      className="w-full bg-[#111111] border border-[#2B2B2B] rounded-lg px-5 py-4 text-gray-400 outline-none focus:border-[#B76E3C]"
                    >
                      <option value="" disabled>
                        Select preferred time
                      </option>

                      <option>Morning (8 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 5 PM)</option>
                      <option>Evening (5 PM - 9 PM)</option>

                    </select>

                  </div>

                  <div>

                    <label className="block text-gray-400 mb-3">
                      Membership Plan
                    </label>

                    <select
                      defaultValue=""
                      className="w-full bg-[#111111] border border-[#2B2B2B] rounded-lg px-5 py-4 text-gray-400 outline-none focus:border-[#B76E3C]"
                    >
                      <option value="" disabled>
                        Choose a plan
                      </option>

                      <option>Basic</option>
                      <option>Premium</option>
                      <option>Elite</option>

                    </select>

                  </div>

                </div>

              </div>

              {/* ================= MESSAGE ================= */}

              <div className="mt-10">

                <label className="block text-gray-400 mb-3">
                  Message *
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-transparent border border-[#2B2B2B] rounded-lg px-5 py-4 text-white placeholder-gray-500 resize-none outline-none focus:border-[#B76E3C]"
                ></textarea>

              </div>

              {/* ================= VISITED BEFORE ================= */}

              <div className="mt-10">

                <label className="block text-white text-lg font-semibold mb-4">
                  Have you visited our gym before?
                </label>

                <div className="flex gap-10">

                  <label className="flex items-center gap-3">

                    <input
                      type="radio"
                      name="visited"
                      className="accent-[#B76E3C] w-5 h-5"
                    />

                    <span className="text-gray-300">
                      Yes
                    </span>

                  </label>

                  <label className="flex items-center gap-3">

                    <input
                      type="radio"
                      name="visited"
                      className="accent-[#B76E3C] w-5 h-5"
                    />

                    <span className="text-gray-300">
                      No
                    </span>

                  </label>

                </div>

              </div>

              {/* ================= FITNESS INTERESTS ================= */}

              <div className="mt-10">

                <label className="block text-white text-lg font-semibold mb-4">
                  Fitness Interests
                </label>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                  {[
                    "Weight Loss",
                    "Muscle Gain",
                    "Strength",
                    "Cardio",
                    "Yoga",
                    "Boxing",
                  ].map((item) => (

                    <label
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <input
                        type="checkbox"
                        className="accent-[#B76E3C] w-5 h-5"
                      />

                      <span className="text-gray-300">
                        {item}
                      </span>

                    </label>

                  ))}

                </div>

              </div>

              {/* ================= AGREEMENT ================= */}

              <div className="mt-10">

                <label className="flex items-start gap-4">

                  <input
                    type="checkbox"
                    className="accent-[#B76E3C] w-5 h-5 mt-1"
                  />

                  <span className="text-gray-400 leading-7">
                    I agree to be contacted by Fitness Force regarding my inquiry and I accept the privacy policy.
                  </span>

                </label>

              </div>

              {/* ================= SUBMIT ================= */}

              <button className="mt-12 bg-[#B76E3C] hover:bg-[#9B5F34] transition px-10 py-4 rounded-xl font-semibold text-lg">
                Send Inquiry
              </button>

            </div>

          </div>

        </section>

        {/* ================= MAP ================= */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <iframe
              title="Gym Location"
              src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
              className="w-full h-[500px] rounded-2xl border border-[#B76E3C]"
              loading="lazy"
            ></iframe>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}

export default Contact;