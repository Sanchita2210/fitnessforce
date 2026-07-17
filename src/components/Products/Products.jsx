import strength from "../../assets/products/strength.jpg";
import boxing from "../../assets/products/boxing.jpg";
import cardio from "../../assets/products/cardio.jpg";
import yoga from "../../assets/products/yoga.jpg";

function Products() {
  const programs = [
    {
      title: "Strength Training",
      image: strength,
      description:
        "Build muscle and increase strength with professional coaching and progressive training.",
    },
    {
      title: "Boxing",
      image: boxing,
      description:
        "Improve endurance, coordination, and confidence while burning calories with boxing.",
    },
    {
      title: "Cardio",
      image: cardio,
      description:
        "Boost heart health, burn fat, and increase stamina through guided cardio workouts.",
    },
    {
      title: "Yoga",
      image: yoga,
      description:
        "Enhance flexibility, balance, posture, and mental well-being with expert instructors.",
    },
  ];

  return (
    <section className="bg-[#0B0B0B] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <p className="text-[#B76E3C] uppercase tracking-[4px] text-center font-semibold">
          Our Programs
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mt-4">
          Find the Perfect Workout
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-5 text-lg">
          Choose from our professionally designed fitness programs
          tailored for every goal and experience level.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-[#171717] rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {program.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7 text-base">
                  {program.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;