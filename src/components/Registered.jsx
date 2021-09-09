import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import envelope from "../assets/envelope.png";

const Registered = () => {
  const [email, setEmail] = useState("");
  let { id } = useParams();
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          `https://zocket-assignment-3.herokuapp.com/user/${id}`
        );
        setEmail(data[0].email);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [id]);

  return <>{email ? <Success email={email} /> : <Failure />}</>;
};

function Success({ email }) {
  return (
    <div className="container">
      <div
        className="d-flex align-items-center justify-content-center shadow-lg"
        style={{ height: "100vh" }}>
        <div className="">
          <div className="ms-5">
            <img className="card-img-top w-50" src={envelope} alt="email" />
          </div>
          <h5 className="">Registration Successful</h5>
          <p className="">
            Please Check your inbox
            <br />
            We have sent you an email at {email}
          </p>
          <Link className="btn btn-primary" to="/">
            Go back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

function Failure() {
  return (
    <div className="container">
      <div
        className="d-flex align-items-center justify-content-center shadow-lg"
        style={{ height: "100vh" }}>
        <div className="">
          <h5 className="">We cannot find what you're looking for</h5>
          <Link className="btn btn-primary" to="/">
            Go back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registered;
