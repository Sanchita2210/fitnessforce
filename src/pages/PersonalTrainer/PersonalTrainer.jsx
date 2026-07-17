import { useNavigate } from "react-router-dom";
import heroTrainer from "../../assets/trainer/trainer.jpg";

import trainer1 from "../../assets/trainer/trainer1.jpg";
import trainer2 from "../../assets/trainer/trainer2.jpg";
import trainer3 from "../../assets/trainer/trainer3.jpg";
import trainer4 from "../../assets/trainer/trainer4.jpg";
import trainer5 from "../../assets/trainer/trainer5.jpg";
import trainer6 from "../../assets/trainer/trainer6.jpg";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer";

import {
  FaDumbbell,
  FaAppleAlt,
  FaChartLine,
  FaUserCheck,
} from "react-icons/fa";

function PersonalTrainer() {
  const navigate = useNavigate();

const goToMembership = () => {
  navigate("/membership#membership-form");
};
  const benefits = [
    {
      icon: <FaUserCheck />,
      title: "Personal Guidance",
      text: "Get one-on-one attention from certified fitness professionals.",
    },
    {
      icon: <FaDumbbell />,
      title: "Custom Workouts",
      text: "Training plans designed according to your fitness goals.",
    },
    {
      icon: <FaAppleAlt />,
      title: "Nutrition Support",
      text: "Learn the right nutrition habits to maximize results.",
    },
    {
      icon: <FaChartLine />,
      title: "Track Progress",
      text: "Monitor your improvements and achieve your goals faster.",
    },
    
  ];

  const trainers = [
    {
      image: trainer1,
      name: "Tom Holland",
      role: "Head Coach",
      programs: ["Heavy Metal", "Strength"],
    },
    {
      image: trainer2,
      name: "Jane Cooper",
      role: "Head Coach",
      programs: ["Stretching", "Workout"],
    },
    {
      image: trainer3,
      name: "Peter Pipper",
      role: "Coach",
      programs: ["Run for All", "Workout"],
    },
    {
      image: trainer4,
      name: "Sophia Carter",
      role: "Head Personal Trainer",
      programs: ["Strength Training", "Fat Loss"],
    },
    {
      image: trainer5,
      name: "Olivia Bennett",
      role: "Yoga & Mobility Instructor",
      programs: ["Yoga", "Recovery"],
    },
    {
      image: trainer6,
      name: "Liam Anderson",
      role: "Performance Trainer",
      programs: ["Strength", "Body Transformation"],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-[#0B0B0B] text-white">

        {/* HERO */}

        <section
          className="relative h-screen bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${heroTrainer})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

            <div className="max-w-2xl">

              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mt-5">
                Transform Your Body
                <br />
                With Expert Coaching
              </h1>

              <p className="text-gray-300 text-lg leading-8 mt-8">
                Work directly with experienced trainers who create
                personalized workout plans, provide motivation,
                and help you achieve lasting results.
              </p>

              <button
  onClick={goToMembership}
  className="mt-10 bg-[#B76E3C] hover:bg-[#9B5F34] px-8 py-4 rounded-full font-semibold transition"
>
  Start Training
</button>

            </div>

          </div>
        </section>

        {/* BENEFITS */}

        <section className="bg-[#111111] py-20">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center">

              <p className="text-[#B76E3C] uppercase tracking-[4px] font-semibold">
                BENEFITS
              </p>

              <h2 className="text-4xl font-bold mt-4">
                Why Choose Personal Training?
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

              {benefits.map((item) => (

                <div
                  key={item.title}
                  className="bg-[#171717] p-8 rounded-3xl hover:-translate-y-2 transition duration-300"
                >

                  <div className="text-[#B76E3C] text-3xl mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>
                {/* TRAINERS */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-16">

              <p className="text-[#B76E3C] uppercase tracking-[4px] font-semibold">
                OUR TRAINERS
              </p>

              <h2 className="text-5xl font-bold mt-4">
                Meet Our Expert Coaches
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">

              {trainers.map((trainer) => (

                <div key={trainer.name} className="group">

                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="mt-6">

                    <h3 className="text-2xl font-bold">
                      {trainer.name}
                    </h3>

                    <p className="text-gray-400 mt-1">
                      {trainer.role}
                    </p>

                    <div className="flex items-center gap-2 mt-3">

                      <span className="text-yellow-400 text-lg">
                        ★★★★★
                      </span>

                      <span className="font-semibold">
                        4.9
                      </span>

                    </div>

                    <hr className="border-[#2A2A2A] my-5" />

                    <h4 className="font-semibold">
                      Leads Programs:
                    </h4>

                    <ul className="mt-3 text-gray-400 space-y-2">

                      {trainer.programs.map((program) => (

                        <li key={program}>
                          • {program}
                        </li>

                      ))}

                    </ul>

                    <p className="mt-5 text-gray-500">
                      Master of Sports in Gymnastics
                    </p>

                    <p className="text-gray-500">
                      8+ Years of Professional Coaching
                    </p>

                    <hr className="border-[#2A2A2A] my-5" />

                    <button
  onClick={goToMembership}
  className="uppercase tracking-[3px] text-sm font-semibold text-[#B76E3C] hover:text-white transition duration-300"
>
  BOOK A WORKOUT →
</button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="py-24 bg-[#111111]">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[4px] text-[#B76E3C] font-semibold">
              START TODAY
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-5">
              Ready To Start Your Fitness Journey?
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-6 max-w-2xl mx-auto">
              Work with experienced trainers who are committed to helping
              you build strength, improve endurance, and achieve your
              fitness goals with personalized coaching.
            </p>

            <button
  onClick={goToMembership}
  className="mt-10 bg-[#B76E3C] hover:bg-[#9B5F34] px-10 py-4 rounded-full font-semibold transition duration-300"
>
  Book A Trainer
</button>

          </div>

        </section>

      </div>

      <Footer />

    </>
  );
}

export default PersonalTrainer;