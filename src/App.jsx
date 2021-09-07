import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tailor from "./components/Tailor";
import WhyUs from "./components/WhyUs";
import HearFromThem from "./components/HearFromThem";
import MailSubscribe from "./components/MailSubscribe";
import Footer from "./components/Footer";
const App = () => {
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

export default App;
