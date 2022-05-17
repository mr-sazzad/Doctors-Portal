import React from "react";
import quote from "../..//assets/icons/quote.svg";
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from "../Review/Review";

const Testimonials = () => {
    const Reviews = [
        {
            _id: 1,
            name: 'winson Herry',
            Reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            place: 'California'
        },
        {
            _id: 2,
            name: 'winson Herry',
            Reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            place: 'California'
        },
        {
            _id: 3,
            name: 'winson Herry',
            Reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            place: 'California'
        },
    ]
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl text-primary">Testimonial</p>
          <h1 className="text-3xl">What Our Patients Says</h1>
        </div>
        <div>
          <img height={150} width={150} src={quote} alt="quote" />
        </div>
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                  Reviews.map(review => <Review key={review._id} review={review} />)
              }
      </div>
    </div>
  );
};

export default Testimonials;
