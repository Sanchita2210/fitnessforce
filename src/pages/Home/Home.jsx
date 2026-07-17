import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Products />

      <WhyChooseUs />

      <Footer />
    </>
  );
}

export default Home;