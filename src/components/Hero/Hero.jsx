import { Link } from "react-router-dom";
import hero from "../../assets/hero-bg.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex items-center px-6 lg:px-8 pt-20">

        <div className="max-w-3xl">

          <p className="text-[#B76E3C] uppercase tracking-[4px] text-sm md:text-base font-semibold mb-6">
            Nepal's Premium Fitness Center
          </p>

          <h1 className="text-5xl text-white md:text-6xl lg:text-7xl font-bold leading-[1.1]">
            Transform Your{" "}
            <span className="text-[#B76E3C]">Body.</span>
            <br />
            Transform Your{" "}
            <span className="text-[#B76E3C]">Future.</span>
          </h1>

          <p className="mt-8 text-base md:text-lg text-gray-300 leading-8 max-w-2xl">
            Achieve your fitness goals with expert coaching,
            personalized workout plans, cutting-edge equipment,
            and a supportive fitness community that helps you
            stay motivated every step of your journey.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/membership"
              className="bg-[#B76E3C] hover:bg-[#9B5F34] text-white px-8 py-3 rounded-full font-semibold transition duration-300"
            >
              Join Today
            </Link>

            <Link
              to="/personal-trainer"
              className="border border-[#B76E3C] text-[#B76E3C] hover:bg-[#B76E3C] hover:text-white px-8 py-3 rounded-full font-semibold transition duration-300"
            >
              Meet Our Trainers
            </Link>

          </div>

          {/* Bottom Text */}
          <div className="mt-16">
            <p className="text-white/70 tracking-[8px] text-sm">
              EST. 2019
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;