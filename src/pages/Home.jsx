import Hero from "../components/Hero";
import Services from "../components/Services";
import QuoteForm from "../components/QuoteForm";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceRoutes from "../components/ServiceRoutes";
import StatsCounter from "../components/StatsCounter";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <ServiceRoutes />
      <StatsCounter/>
      <WhyChooseUs/>
       <Gallery/>
      <Testimonials/>
      <QuoteForm/>
      <Footer />
    </>
  );
};

export default Home;
