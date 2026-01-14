import Hero from "../components/Hero";
import Services from "../components/Services";
import QuoteForm from "../components/QuoteForm";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceRoutes from "../components/ServiceRoutes";
import StatsCounter from "../components/StatsCounter";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import PricingTable from "../components/PricingTable";


const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Hero />
      <About />
      <Services />
      <PricingTable/>
      <ServiceRoutes />
      <StatsCounter/>
      <WhyChooseUs/>
       <Gallery/>
      <Testimonials/>
      <QuoteForm/>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
