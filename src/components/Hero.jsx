import React, { useState } from "react";
import illustration from "../assets/illustration.png";
import validator from "validator";
import smallestYellowBall from "../assets/smallestYellowBall.png";
import smallYellowBall from "../assets/smallYellowBall.png";
import heroBlueBall from "../assets/heroBlueBall.png";
import yellowTriangle from "../assets/yellowTriangle.png";
const Hero = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      alert("valid email");
    } else {
      alert("invalid email");
    }
  };

  return (
    <section className="py-5">
      <div className="container hero position-relative">
        <img
          className="position-absolute heroSmallYellowBall"
          src={smallYellowBall}
          alt=""
        />
        <img className="position-absolute" src={smallestYellowBall} alt="" />
        <img
          className="position-absolute heroBlueBall"
          src={heroBlueBall}
          alt=""
        />
        <img
          className="position-absolute yellowTriangle"
          src={yellowTriangle}
          alt=""
        />
        <img
          className="position-absolute yellowTriangle2"
          src={yellowTriangle}
          alt=""
        />
        <div className="d-flex mt-5 justify-content-evenly">
          <div className="">
            <h1>
              FACEBOOK ADS
              <br /> IN 30 SECONDS
            </h1>
            <p>
              Create stunning ad copy incredibly fast and
              <br /> skyrocket your digital business.
            </p>
            <div className="input-group mb-3">
              <form onSubmit={handleSubmit}></form>
              <input
                type="text"
                className="form-control"
                placeholder="Your email address"
                onChange={handleChange}
                style={{ background: "#F4F5F4" }}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleSubmit}>
                Get Early Access
              </button>
            </div>
          </div>
          <div>
            <img
              className="d-sm-none d-none  d-lg-block"
              src={illustration}
              alt="facebook-ads"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
