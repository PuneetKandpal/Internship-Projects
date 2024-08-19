import React from "react";
import Navbar from "../Components/Navbar";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar withHeroSection={false} />
      <ContactUs />

      <Footer />
    </div>
  );
};

export default Contact;
