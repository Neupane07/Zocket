import React, { useState } from "react";
import illustration from "../assets/illustration.png";
import smallestYellowBall from "../assets/smallestYellowBall.png";
import smallYellowBall from "../assets/smallYellowBall.png";
import heroBlueBall from "../assets/heroBlueBall.png";
import yellowTriangle from "../assets/yellowTriangle.png";
import validator from "validator";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Hero = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      const { data } = await axios.post(
        "https://zocket-assignment-3.herokuapp.com/register",
        {
          email,
        }
      );
      console.log(data);
      if (data.rowCount) {
        alert("You have been registered");
        history.push(`/Zocket/${data.id}`);
      } else {
        if (data.code === "23505") {
          alert("E-mail already registered, Please provide new one");
        }
      }
    } else {
      alert("Invalid email");
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
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your email address"
                  onChange={handleChange}
                  style={{ background: "#F4F5F4" }}
                />
              </form>
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
