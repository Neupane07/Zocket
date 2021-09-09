import React from "react";

const ReviewCard = ({
  reviewHeading,
  reviewText,
  profilePicture,
  reviewerName,
  profession,
}) => {
  return (
    <div className="card bg-light">
      <div className="card-body text-center">
        <p className="card-heading">{reviewHeading}</p>
        <p className="card-text card-para mx-4">{reviewText}</p>
        <img
          src={profilePicture}
          className="rounded-circle mb-3 mt-5 mx-auto"
          alt=""
        />
        <h3 className="card-name">{reviewerName}</h3>
        <p className="card-para">{profession}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
