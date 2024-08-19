import React from "react";
import Navbar from "../Components/Navbar";
import ContactUs from "../Components/ContactUs";

const Contact = () => {
  return (
    <div>
      <Navbar withHeroSection={false} />
      <ContactUs />
    </div>
  );
};

export default Contact;
