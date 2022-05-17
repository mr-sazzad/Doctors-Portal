import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
      <div class="card-body">
              <p>{review.Reviews}</p>
              <div className="mt-5 flex justify-center items-center">
                  <img className="ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full" height={70} width={70} src={review.img} alt='' />
                  <div>
                      <p className="ml-5">{review.name}</p>
                      <p className="ml-5">{review.place}</p>
                  </div>
                  
              </div>
      </div>
    </div>
  );
};

export default Review;
