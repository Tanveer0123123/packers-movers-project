import Hero from "../components/Hero";
import Services from "../components/Services";
import QuoteForm from "../components/QuoteForm";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceRoutes from "../components/ServiceRoutes";
import StatsCounter from "../components/StatsCounter";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import PricingTable from "../components/PricingTable";
import TourServices from "../components/TourServices";


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TourServices/>
      <PricingTable/>
      <ServiceRoutes />
      <StatsCounter/>
      <WhyChooseUs/>
       <Gallery/>
      <Testimonials/>
      <QuoteForm/>
    </>
  );
};

export default Home;
