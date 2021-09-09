import React from "react";
import adCampaign from "../assets/adcampaign.png";
import calls from "../assets/calls.png";
import expertise from "../assets/expertise.png";

const WhyUs = () => {
  return (
    <section className="py-5" id="whyus">
      <div className="container whyus lh-lg">
        <h1 className="text-center mb-5 heading-text">Why Us</h1>
        <div className="d-flex justify-content-evenly">
          <div className="col-md-6">
            <img
              className="img-fluid d-lg-block d-md-block d-none"
              src={adCampaign}
              alt="ad"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-5">Localised Ad Campaigns</h2>
            <p className="text-wrap me-5">
              With Zocket’s localised ad campaigns, you’re sure to drive
              customers to your physical store. Online business listings,
              geo-tagging, and ads are some of the many things we help
              businesses get started with. You can rest assured that you’ll
              leave a positive brand image on your customers as your business
              flourishes, making it easier for you to build long-lasting
              customer relationships locally.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-evenly mt-5">
          <div className="col-md-6">
            <h2 className="mb-5 mt-5">Get More Calls and Enquiries</h2>
            <p className="text-wrap me-5">
              When you use Zocket, you can expect calls pouring in with
              enquiries about your business. Our exceptional outreach strategies
              and business profile optimization techniques will catch the eye of
              prospects. With organic leads taken care of by Zoket, all you’d
              have to worry about is converting your leads to customers.
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid d-lg-block d-md-block d-none"
              src={calls}
              alt="ad"
            />
          </div>
        </div>
        <div className="d-flex justify-content-evenly mt-5">
          <div className="col-md-6">
            <img
              className="img-fluid d-lg-block d-md-block d-none"
              src={expertise}
              alt="ad"
            />
          </div>
          <div className="col-md-6">
            <h2 className="my-5">Localised Ad Campaigns</h2>
            <p className="text-wrap me-5">
              With Zocket’s localised ad campaigns, you’re sure to drive
              customers to your physical store. Online business listings,
              geo-tagging, and ads are some of the many things we help
              businesses get started with. You can rest assured that you’ll
              leave a positive brand image on your customers as your business
              flourishes, making it easier for you to build long-lasting
              customer relationships locally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
