import React from "react";
import backgroundWave from "../assets/background-wave.png";
import envelope from "../assets/envelope.png";
const MailSubscribe = () => {
  return (
    <section className="py-5">
      <div className="container">
        <img className="img-fluid w-100" src={backgroundWave} alt="" />
        <div className="d-flex align-items-center justify-content-around">
          <div className="my-5">
            <img src={envelope} alt="" />
          </div>
          <div>
            <h3 className="envelope-text">
              Be one of the first to know <br />
              when we launch!
            </h3>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your email address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                style={{ backgroundColor: "#0A286B" }}
                className="btn btn-primary"
                type="button"
                id="button-addon2">
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
