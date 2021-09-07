import React from "react";
import person from "../assets/person.png";
import quoteIcon from "../assets/quoteicon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HearFromThem = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section className="py-5">
      <div className="container position-relative">
        <img className="position-absolute quoteicon" src={quoteIcon} alt="" />
        <h1 className="text-center heading-text">Hear It From Them</h1>
        {/* <div className="row g-4 mt-5">
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Incredibly Amazing!</p>
                <p className="card-text card-para mx-4">
                  Zocket made a huge difference in just a few weeks of using it.
                  Their ad copy helped take our business to the next level.
                </p>
                <img src={person} className="rounded-circle mb-3 mt-5" alt="" />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Remarkable Growth</p>
                <p className="card-text card-para mx-4">
                  Since the day we started using Zocket, we’ve seen incredible
                  growth in inbound enquiries and leads.
                </p>
                <img src={person} className="rounded-circle mb-3 mt-5" alt="" />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Awesome Features</p>
                <p className="card-text card-para mx-4">
                  Zocket has every feature you can think of when it comes to
                  growing your business. I highly recommend Zocket to everyone.
                </p>
                <img src={person} className="rounded-circle mb-3 mt-5" alt="" />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
        </div> */}
        <Slider {...settings}>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Incredibly Amazing!</p>
                <p className="card-text card-para mx-4">
                  Zocket made a huge difference in just a few weeks of using it.
                  Their ad copy helped take our business to the next level.
                </p>
                <img
                  src={person}
                  className="rounded-circle mx-auto mb-3 mt-5"
                  alt=""
                />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Remarkable Growth</p>
                <p className="card-text card-para mx-4">
                  Since the day we started using Zocket, we’ve seen incredible
                  growth in inbound enquiries and leads.
                </p>
                <img
                  src={person}
                  className="rounded-circle mx-auto mb-3 mt-5"
                  alt=""
                />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Awesome Features</p>
                <p className="card-text card-para mx-4">
                  Zocket has every feature you can think of when it comes to
                  growing your business. I highly recommend Zocket to everyone.
                </p>
                <img
                  src={person}
                  className="rounded-circle mx-auto mb-3 mt-5"
                  alt=""
                />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Incredibly Amazing!</p>
                <p className="card-text card-para mx-4">
                  Zocket made a huge difference in just a few weeks of using it.
                  Their ad copy helped take our business to the next level.
                </p>
                <img
                  src={person}
                  className="rounded-circle mx-auto mb-3 mt-5"
                  alt=""
                />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Remarkable Growth</p>
                <p className="card-text card-para mx-4">
                  Since the day we started using Zocket, we’ve seen incredible
                  growth in inbound enquiries and leads.
                </p>
                <img
                  src={person}
                  className="rounded-circle mx-auto mb-3 mt-5"
                  alt=""
                />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Awesome Features</p>
                <p className="card-text card-para mx-4">
                  Zocket has every feature you can think of when it comes to
                  growing your business. I highly recommend Zocket to everyone.
                </p>
                <img
                  src={person}
                  className="rounded-circle mx-auto mb-3 mt-5"
                  alt=""
                />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Incredibly Amazing!</p>
                <p className="card-text card-para mx-4">
                  Zocket made a huge difference in just a few weeks of using it.
                  Their ad copy helped take our business to the next level.
                </p>
                <img
                  src={person}
                  className="rounded-circle mx-auto mb-3 mt-5"
                  alt=""
                />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Incredibly Amazing!</p>
                <p className="card-text card-para mx-4">
                  Zocket made a huge difference in just a few weeks of using it.
                  Their ad copy helped take our business to the next level.
                </p>
                <img
                  src={person}
                  className="rounded-circle mx-auto mb-3 mt-5"
                  alt=""
                />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <p className="card-heading">Incredibly Amazing!</p>
                <p className="card-text card-para mx-4">
                  Zocket made a huge difference in just a few weeks of using it.
                  Their ad copy helped take our business to the next level.
                </p>
                <img
                  src={person}
                  className="rounded-circle mx-auto mb-3 mt-5"
                  alt=""
                />
                <h3 className="card-name">Ella May</h3>
                <p className="card-para">Digital Marketer</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HearFromThem;
