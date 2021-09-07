import React, { useState } from "react";
import backgroundWave from "../assets/background-wave.png";
import envelope from "../assets/envelope.png";
import validator from "validator";
import axios from "axios";
const MailSubscribe = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      const { data } = await axios.get("http://localhost:9000/register");
      console.log(data);
      alert("valid email");
    } else {
      alert("invalid email");
    }
  };
  return (
    <section className="py-5">
      <div className="container">
        <div
          style={{
            background: `url(${backgroundWave})`,
            backgroundSize: "cover",
            borderRadius: "4px",
            objectFit: "cover",
          }}
          className="d-flex align-items-center justify-content-around envelope-container">
          <div className="my-5">
            <img className="d-none d-md-block" src={envelope} alt="" />
          </div>
          <div>
            <h3 className="envelope-text">
              Be one of the first to know <br />
              when we launch!
            </h3>
            <div className="input-group mb-3">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your email address"
                  onChange={handleChange}
                />
              </form>
              <button
                style={{ backgroundColor: "#0A286B" }}
                className="btn btn-primary"
                type="button"
                onClick={handleSubmit}>
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailSubscribe;
