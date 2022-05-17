import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import Info from "../Info/Info";
import Services from "../Services/Services";
import ServiceSecondPart from "../ServiceSecondPart/ServiceSecondPart";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="lg:mx-20">
      <Banner />
      <div className="mx-10">
        <Info />
        <Services />
        <ServiceSecondPart />
        <HomeAppointment />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
