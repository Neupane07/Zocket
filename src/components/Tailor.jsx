import React from "react";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import instagram from "../assets/Instagram.png";
const Tailor = () => {
  return (
    <section className="py-5">
      <div className="container tailor">
        <div>
          <h1 className="text-center heading-text">Tailor-made Services</h1>
        </div>
        <div className="row g-4 lh-lg mt-3">
          <div className="col-md p-5 shadow">
            <img className="mb-5" src={facebook} alt="facebook" />

            <h3 className="">Facebook Ads</h3>
            <p>
              With custom audience targeting and <br />
              personalized ad campaigns, your
              <br /> business is sure to acquire leads.
            </p>
            <a href="/" className="primary">
              Explore
            </a>
          </div>
          <div className="col-md p-5 shadow">
            <img className="img-fluid mb-5" alt="google" src={google} />
            <h3>Google Ads</h3>
            <p>
              We offer industry research paired <br /> with PPC monitoring and
              A/B testing
              <br /> to ensure you get an improved ROI.
            </p>
            <a href="/" className="primary">
              Explore
            </a>
          </div>
          <div className="col-md p-5 shadow">
            <img className="mb-5" src={instagram} alt="instagram" />

            <h3>Instagram Ads</h3>
            <p>
              Right from design & content strategy
              <br /> to profile management and everything
              <br /> in between, we’ve got you covered.
            </p>
            <a href="/" className="primary">
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tailor;
