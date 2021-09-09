import React from "react";
import person from "../assets/person.png";
import quoteIcon from "../assets/quoteicon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";
const HearFromThem = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick",
      },
      { breakpoint: 900 },
    ],
  };

  return (
    <section className="py-5">
      <div className="container position-relative">
        <img
          className="position-absolute quoteicon d-none d-md-block d-lg-block"
          src={quoteIcon}
          alt=""
        />
        <h1 className="text-center heading-text">Hear It From Them</h1>
        <Slider {...settings}>
          <div className="col-md-4">
            <ReviewCard
              reviewHeading="Incredibly Amazing!"
              reviewText="Zocket made a huge difference in just a few weeks of using it.
            Their ad copy helped take our business to the next level."
              profilePicture={person}
              reviewerName="Ella May"
              profession="Digital Marketer"
            />
          </div>
          <div className="col-md-4">
            <ReviewCard
              reviewHeading="Incredibly Amazing!"
              reviewText="Zocket made a huge difference in just a few weeks of using it.
            Their ad copy helped take our business to the next level."
              profilePicture={person}
              reviewerName="Ella May"
              profession="Digital Marketer"
            />
          </div>
          <div className="col-md-4">
            <ReviewCard
              reviewHeading="Incredibly Amazing!"
              reviewText="Zocket made a huge difference in just a few weeks of using it.
            Their ad copy helped take our business to the next level."
              profilePicture={person}
              reviewerName="Ella May"
              profession="Digital Marketer"
            />
          </div>
          <div className="d-none d-md-block col-md-4">
            <ReviewCard
              reviewHeading="Incredibly Amazing!"
              reviewText="Zocket made a huge difference in just a few weeks of using it.
            Their ad copy helped take our business to the next level."
              profilePicture={person}
              reviewerName="Ella May"
              profession="Digital Marketer"
            />
          </div>
          <div className="d-none d-md-block col-md-4">
            <ReviewCard
              reviewHeading="Incredibly Amazing!"
              reviewText="Zocket made a huge difference in just a few weeks of using it.
            Their ad copy helped take our business to the next level."
              profilePicture={person}
              reviewerName="Ella May"
              profession="Digital Marketer"
            />
          </div>
          <div className="d-none d-md-block col-md-4">
            <ReviewCard
              reviewHeading="Incredibly Amazing!"
              reviewText="Zocket made a huge difference in just a few weeks of using it.
            Their ad copy helped take our business to the next level."
              profilePicture={person}
              reviewerName="Ella May"
              profession="Digital Marketer"
            />
          </div>
          <div className="d-none d-md-block col-md-4">
            <ReviewCard
              reviewHeading="Incredibly Amazing!"
              reviewText="Zocket made a huge difference in just a few weeks of using it.
            Their ad copy helped take our business to the next level."
              profilePicture={person}
              reviewerName="Ella May"
              profession="Digital Marketer"
            />
          </div>
          <div className="d-none d-md-block col-md-4">
            <ReviewCard
              reviewHeading="Incredibly Amazing!"
              reviewText="Zocket made a huge difference in just a few weeks of using it.
            Their ad copy helped take our business to the next level."
              profilePicture={person}
              reviewerName="Ella May"
              profession="Digital Marketer"
            />
          </div>
          <div className="d-none d-md-block col-md-4">
            <ReviewCard
              reviewHeading="Incredibly Amazing!"
              reviewText="Zocket made a huge difference in just a few weeks of using it.
            Their ad copy helped take our business to the next level."
              profilePicture={person}
              reviewerName="Ella May"
              profession="Digital Marketer"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HearFromThem;
