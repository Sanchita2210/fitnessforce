import gym from "../../assets/whychoose/gym.jpg";

import {
  FaUsers,
  FaUserTie,
  FaDumbbell,
  FaTrophy,
} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="bg-[#111111] text-white py-20">

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="text-[#B76E3C] uppercase tracking-[4px] font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mt-4">
              More Than a Gym,
              <br />
              It's a Lifestyle
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-8 max-w-xl">
              We provide the perfect environment, expert guidance,
              and motivation to help you become the strongest
              version of yourself.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">

              {[
                "Certified & Experienced Trainers",
                "State-of-the-Art Equipment",
                "Personalized Workout Plans",
                "Nutrition Guidance",
                "Clean, Safe & Friendly Environment",
                "Flexible Membership Options",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="text-[#B76E3C] text-xl">✓</span>
                  <p className="text-lg">{item}</p>
                </div>
              ))}

            </div>

            

          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={gym}
              alt="Gym"
              className="w-full max-w-xl rounded-3xl object-cover shadow-2xl"
            />
          </div>

        </div>

      </div>

      {/* Statistics */}
      <div className="bg-[#181818] mt-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="text-center">
              <FaUsers className="text-[#B76E3C] text-3xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold">5000+</h3>
              <p className="text-gray-400 mt-2">Happy Members</p>
            </div>

            <div className="text-center">
              <FaUserTie className="text-[#B76E3C] text-3xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold">40+</h3>
              <p className="text-gray-400 mt-2">Expert Trainers</p>
            </div>

            <div className="text-center">
              <FaDumbbell className="text-[#B76E3C] text-3xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold">15+</h3>
              <p className="text-gray-400 mt-2">Fitness Programs</p>
            </div>

            <div className="text-center">
              <FaTrophy className="text-[#B76E3C] text-3xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold">8+</h3>
              <p className="text-gray-400 mt-2">Years of Excellence</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;