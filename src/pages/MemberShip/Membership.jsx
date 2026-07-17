import { useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer";
import hero from "../../assets/membership/hero.jpg";

function Membership() {
  const formRef = useRef(null);
const plansRef = useRef(null);
useEffect(() => {
  if (window.location.hash === "#membership-form") {
    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  }
}, []);

const scrollToForm = () => {
  formRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const scrollToPlans = () => {
  plansRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  return (
    <>
      <Navbar />

      <main className="bg-[#0B0B0B] text-white">

        {/* ================= HERO ================= */}

        <section className="relative h-[600px] overflow-hidden">

          <img
            src={hero}
            alt="Membership"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center">

            <div className="max-w-xl">

              <p className="uppercase tracking-[4px] text-[#B76E3C] font-semibold">
                MEMBERSHIP
              </p>

              <h1 className="text-6xl font-bold leading-tight mt-4">
                Choose the Plan
                <br />
                That Fits You
              </h1>

              <p className="text-gray-300 text-lg leading-8 mt-6">
                Flexible membership plans designed for every fitness level.
                Whether you're just starting your journey or training like a
                professional athlete, we have the perfect membership for you.
              </p>

              <div className="flex items-center gap-8 mt-10">

                <button
  onClick={scrollToForm}
  className="bg-[#B76E3C] hover:bg-[#9B5F34] px-8 py-4 rounded-full font-semibold transition"
>
  Join Now
</button>

                <button
  onClick={scrollToPlans}
  className="text-[#B76E3C] uppercase tracking-[3px] font-semibold hover:text-white transition"
>
  Compare Plans →
</button>

              </div>

            </div>

          </div>

        </section>

        {/* ================= MEMBERSHIP PLANS ================= */}

        <section
  ref={plansRef}
  className="py-24"
>

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-3 gap-8">

              {/* BASIC */}

              <div className="bg-[#171717] rounded-3xl p-10 border border-transparent hover:border-[#B76E3C] transition">

                <h3 className="text-2xl font-bold text-[#B76E3C]">
                  Basic
                </h3>

                <p className="text-4xl font-bold mt-5">
                  $29
                  <span className="text-lg text-gray-400"> /month</span>
                </p>

                <ul className="mt-8 space-y-4 text-gray-300">

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Gym Access
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Locker Access
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Basic Equipment
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Free Fitness Assessment
                  </li>

                </ul>

                <button
  onClick={scrollToForm}
  className="mt-10 w-full border border-[#B76E3C] text-[#B76E3C] py-3 rounded-full hover:bg-[#B76E3C] hover:text-white transition"
>
  Join Now
</button>

              </div>

              {/* PREMIUM */}

              <div className="bg-[#171717] rounded-3xl p-10 border-2 border-[#B76E3C] scale-105 shadow-[0_0_30px_rgba(183,110,60,0.25)]">

                <p className="uppercase tracking-[3px] text-sm text-[#B76E3C] mb-2">
                  Most Popular
                </p>

                <h3 className="text-2xl font-bold text-[#B76E3C]">
                  Premium
                </h3>

                <p className="text-4xl font-bold mt-5">
                  $49
                  <span className="text-lg text-gray-400"> /month</span>
                </p>

                <ul className="mt-8 space-y-4 text-gray-300">

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Unlimited Gym Access
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Personal Trainer (2 Sessions)
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Group Classes Included
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Nutrition Consultation
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Steam Room Access
                  </li>

                </ul>

                <button
  onClick={scrollToForm}
  className="mt-10 w-full bg-[#B76E3C] hover:bg-[#9B5F34] py-3 rounded-full font-semibold transition"
>
                  Join Now
                </button>

              </div>

              {/* ELITE */}

              <div className="bg-[#171717] rounded-3xl p-10 border border-transparent hover:border-[#B76E3C] transition">

                <h3 className="text-2xl font-bold text-[#B76E3C]">
                  Elite
                </h3>

                <p className="text-4xl font-bold mt-5">
                  $79
                  <span className="text-lg text-gray-400"> /month</span>
                </p>

                <ul className="mt-8 space-y-4 text-gray-300">

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Unlimited Premium Access
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Unlimited Personal Training
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Full Group Classes
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Recovery & Spa
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Priority Booking
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#B76E3C]">✓</span>
                    Monthly Body Analysis
                  </li>

                </ul>

                <button
  onClick={scrollToForm}
  className="mt-10 w-full border border-[#B76E3C] text-[#B76E3C] py-3 rounded-full hover:bg-[#B76E3C] hover:text-white transition"
>
  Join Now
</button>

              </div>

            </div>

          </div>

        </section>
                {/* ================= MEMBERSHIP FORM ================= */}

        <section
  ref={formRef}
  id="membership-form"
  className="pb-24 bg-[#0B0B0B]"
>

          <div className="max-w-6xl mx-auto px-6">

            <div className="bg-[#121212] border border-[#B76E3C] rounded-2xl p-10">

              <p className="uppercase tracking-[3px] text-[#B76E3C] text-sm font-semibold">
                JOIN FITNESS FORCE
              </p>

              <h2 className="text-5xl font-bold mt-3">
                Create Your Membership Account
              </h2>

              <p className="text-gray-500 mt-3">
                Fill in your details below to begin your fitness journey.
              </p>

              {/* PERSONAL INFORMATION */}

              <h4 className="text-[#B76E3C] uppercase tracking-[2px] text-sm font-semibold mt-10 mb-6">
                Personal Information
              </h4>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-gray-400 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-transparent border border-[#2b2b2b] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#B76E3C]"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border border-[#2b2b2b] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#B76E3C]"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+977 Enter phone number"
                    className="w-full bg-transparent border border-[#2b2b2b] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#B76E3C]"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    className="w-full bg-[#121212] border border-[#2b2b2b] rounded-lg px-4 py-3 text-white outline-none focus:border-[#B76E3C]"
                  />
                </div>

              </div>

              {/* GENDER */}

              <div className="mt-8">

                <label className="block text-gray-400 mb-3">
                  Gender
                </label>

                <div className="flex flex-wrap gap-8">

                  <label className="flex items-center gap-2 cursor-pointer">

                    <input
                      type="radio"
                      name="gender"
                      className="peer hidden"
                    />

                    <div className="w-4 h-4 rounded-full border-2 border-[#B76E3C] peer-checked:bg-[#B76E3C] transition"></div>

                    <span>Male</span>

                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">

                     <input
                      type="radio"
                      name="gender"
                      className="peer hidden"
                    />

                    <div className="w-4 h-4 rounded-full border-2 border-[#B76E3C] peer-checked:bg-[#B76E3C] transition"></div>

                    <span>Female</span>

                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">

                    <input
                      type="radio"
                      name="gender"
                      className="peer hidden"
                    />

                    <div className="w-4 h-4 rounded-full border-2 border-[#B76E3C] peer-checked:bg-[#B76E3C] transition"></div>

                    <span>Other</span>

                  </label>

                </div>

              </div>

              {/* FITNESS DETAILS */}

              <h4 className="text-[#B76E3C] uppercase tracking-[2px] text-sm font-semibold mt-10 mb-6">
                Fitness Details
              </h4>

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="block text-gray-400 mb-2">
                    Current Fitness Level
                  </label>

                  <select
                    defaultValue=""
                    className="w-full bg-[#121212] border border-[#2b2b2b] rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-[#B76E3C]"
                  >
                    <option value="" disabled>
                      Select Level
                    </option>

                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>

                  </select>

                </div>

                <div>

                  <label className="block text-gray-400 mb-2">
                    Primary Fitness Goal
                  </label>

                  <select
                    defaultValue=""
                    className="w-full bg-[#121212] border border-[#2b2b2b] rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-[#B76E3C]"
                  >
                    <option value="" disabled>
                      Select Goal
                    </option>

                    <option>Weight Loss</option>
                    <option>Muscle Gain</option>
                    <option>Strength Training</option>
                    <option>Body Toning</option>
                    <option>General Fitness</option>
                    <option>Endurance</option>

                  </select>

                </div>

              </div>

              <div className="mt-6">

                <label className="block text-gray-400 mb-2">
                  Preferred Workout Time
                </label>

                <select
                  defaultValue=""
                  className="w-full bg-[#121212] border border-[#2b2b2b] rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-[#B76E3C]"
                >
                  <option value="" disabled>
                    Select Workout Time
                  </option>

                  <option>Morning (6 AM - 10 AM)</option>
                  <option>Afternoon (10 AM - 4 PM)</option>
                  <option>Evening (4 PM - 10 PM)</option>

                </select>

              </div>
                            {/* MEMBERSHIP PLAN */}

              <h4 className="text-[#B76E3C] uppercase tracking-[2px] text-sm font-semibold mt-10 mb-6">
                Membership Plan
              </h4>

              <div className="flex flex-wrap gap-8 text-gray-300">

  <label className="flex items-center gap-3 cursor-pointer">
  <input
    type="radio"
    name="plan"
    className="peer hidden"
  />

  <div className="w-4 h-4 rounded-full border-2 border-[#B76E3C] peer-checked:bg-[#B76E3C] transition"></div>

  <span className="text-gray-300">
    Basic ($29/month)
  </span>
</label>

<label className="flex items-center gap-3 cursor-pointer">
  <input
    type="radio"
    name="plan"
    className="peer hidden"
  />

  <div className="w-4 h-4 rounded-full border-2 border-[#B76E3C] peer-checked:bg-[#B76E3C] transition"></div>

  <span className="text-gray-300">
    Premium ($49/month)
  </span>
</label>

<label className="flex items-center gap-3 cursor-pointer">
  <input
    type="radio"
    name="plan"
    className="peer hidden"
  />

  <div className="w-4 h-4 rounded-full border-2 border-[#B76E3C] peer-checked:bg-[#B76E3C] transition"></div>

  <span className="text-gray-300">
    Elite ($79/month)
  </span>
</label>

</div>

              {/* HEALTH INFORMATION */}

              <h4 className="text-[#B76E3C] uppercase tracking-[2px] text-sm font-semibold mt-10 mb-6">
                Health Information
              </h4>

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="block text-gray-400 mb-2">
                    Medical Conditions
                  </label>

                  <input
                    type="text"
                    placeholder="If any"
                    className="w-full bg-transparent border border-[#2b2b2b] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#B76E3C]"
                  />

                </div>

                <div>

                  <label className="block text-gray-400 mb-2">
                    Emergency Contact Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter contact name"
                    className="w-full bg-transparent border border-[#2b2b2b] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#B76E3C]"
                  />

                </div>

                <div className="md:col-span-2">

                  <label className="block text-gray-400 mb-2">
                    Emergency Contact Number
                  </label>

                  <input
                    type="text"
                    placeholder="+977 Enter phone number"
                    className="w-full bg-transparent border border-[#2b2b2b] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#B76E3C]"
                  />

                </div>

              </div>

              {/* ACCOUNT DETAILS */}

              <h4 className="text-[#B76E3C] uppercase tracking-[2px] text-sm font-semibold mt-10 mb-6">
                Account Details
              </h4>

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="block text-gray-400 mb-2">
                    Username
                  </label>

                  <input
                    type="text"
                    placeholder="Create username"
                    className="w-full bg-transparent border border-[#2b2b2b] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#B76E3C]"
                  />

                </div>

                <div>

                  <label className="block text-gray-400 mb-2">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Create password"
                    className="w-full bg-transparent border border-[#2b2b2b] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#B76E3C]"
                  />

                </div>

                <div className="md:col-span-2">

                  <label className="block text-gray-400 mb-2">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full bg-transparent border border-[#2b2b2b] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#B76E3C]"
                  />

                </div>

              </div>
               


              {/* TERMS & CONDITIONS */}

              <div className="mt-8 space-y-5">

                <label className="flex items-center gap-3 text-gray-400 cursor-pointer">

                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-full border-2 border-[#B76E3C] appearance-none cursor-pointer checked:bg-[#B76E3C] checked:border-[#B76E3C]"
                  />

                  <span>
                    I agree to the{" "}
                    <span className="text-[#B76E3C]">
                      Terms & Conditions
                    </span>{" "}
                    and{" "}
                    <span className="text-[#B76E3C]">
                      Privacy Policy
                    </span>.
                  </span>

                </label>

                <label className="flex items-center gap-3 text-gray-400 cursor-pointer">

                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-full border-2 border-[#B76E3C] appearance-none cursor-pointer checked:bg-[#B76E3C] checked:border-[#B76E3C]"
                  />

                  <span>
                    I agree to receive promotional emails and fitness updates.
                  </span>

                </label>

              </div>

              {/* BUTTON */}

              <button className="w-full mt-10 bg-[#B76E3C] hover:bg-[#9B5F34] py-4 rounded-lg text-lg font-semibold transition">
                Create Membership
              </button>

              <p className="text-center text-gray-400 mt-6">
                Already have an account?
                <span className="text-[#B76E3C] ml-2 font-semibold cursor-pointer hover:underline">
                  Sign In
                </span>
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}

export default Membership;