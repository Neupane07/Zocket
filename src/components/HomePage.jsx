import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Tailor from "./Tailor";
import WhyUs from "./WhyUs";
import HearFromThem from "./HearFromThem";
import MailSubscribe from "./MailSubscribe";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Tailor />
      <WhyUs />
      <HearFromThem />
      <MailSubscribe />
      <Footer />
    </>
  );
};

export default HomePage;
