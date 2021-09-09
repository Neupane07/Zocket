import React, { useState } from "react";
import zocket from "../assets/zocket.png";
import instagramBlue from "../assets/instagram-blue.png";
import twitterBlue from "../assets/twitter-blue.png";
import youtubeBlue from "../assets/youtube-blue.png";
import send from "../assets/send.png";
import validator from "validator";
import axios from "axios";
import { useHistory } from "react-router";

const Footer = () => {
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
        history.push(`/${data.id}`);
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
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={zocket} alt="" />
            <div className="mt-5">
              <p className="lh-lg">
                Copyright © 2021 Zocket.
                <br />
                All rights reserved
              </p>
            </div>
            <div className="mt-5">
              <img className="mx-2 ms-0" src={instagramBlue} alt="" />
              <img src={twitterBlue} alt="" />
              <img className="mx-2" src={youtubeBlue} alt="" />
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <p className="footer-heading">Company</p>
            <a className="d-block f-link mt-5" href="/#">
              About Us
            </a>
            <a className="d-block f-link my-3" href="/#">
              Blog
            </a>
            <a className="d-block f-link my-3" href="/#">
              Contact Us
            </a>
            <a className="d-block f-link my-3" href="/#">
              Pricing
            </a>
            <a className="d-block f-link my-3" href="/#">
              Testimonials
            </a>
          </div>
          <div className="col-md-2">
            <p className="footer-heading">Support</p>
            <a className="d-block f-link mt-5" href="/#">
              Help Center
            </a>
            <a className="d-block f-link my-3" href="/#">
              Tems Of Service
            </a>
            <a className="d-block f-link my-3" href="/#">
              Legal
            </a>
            <a className="d-block f-link my-3" href="/#">
              Privacy Policy
            </a>
            <a className="d-block f-link my-3" href="/#">
              Status
            </a>
          </div>
          <div className="col-md-4">
            <p className="footer-heading text-primary">Get Early Access</p>
            <div className="mt-5 position-relative">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="sendmail p-2"
                  placeholder="Your email address"
                  value={email}
                  onChange={handleChange}
                />
              </form>
              <img
                className="ms-5 position-absolute sendmailimg"
                src={send}
                onClick={handleSubmit}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
