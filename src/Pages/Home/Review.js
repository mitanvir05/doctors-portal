import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <div className="flex items-center">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5 ml-5 mb-5 ">
            <img src={review.img} alt="" />
          </div>
        </div>
        <div>
          <h1>{review.name}</h1>
          <p>{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
