import React, { useState } from "react";
import backgroundWave from "../assets/background-wave.png";
import envelope from "../assets/envelope.png";
import validator from "validator";
import axios from "axios";
import { useHistory } from "react-router-dom";
const MailSubscribe = () => {
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
              <form onSubmit={handleSubmit}>
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
