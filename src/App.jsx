import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import EnquiryPopup from "./components/EnquiryPopup";
import TourServices from './pages/TourServices';
import ServiceDetail from "./pages/ServiceDetail";
import TourServiceDetail from "./pages/TourServiceDetail";

function App() {
  return (
    <>
      <EnquiryPopup />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <MainLayout>
              <ServiceDetail />
            </MainLayout>
          }
        />

        <Route
          path="/gallery"
          element={
            <MainLayout>
              <Gallery />
            </MainLayout>
          }
        />

        <Route
          path="/tour-travels"
          element={
            <MainLayout>
              <TourServices />
            </MainLayout>
          }
        />
        <Route
          path="/tour-services/:slug"
          element={
            <MainLayout>
              <TourServiceDetail />
            </MainLayout>
          }
        />

        <Route
          path="/contactus"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>

    </>


  );
}

export default App;
