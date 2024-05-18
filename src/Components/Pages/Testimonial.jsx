import { useEffect, useState } from "react";
import SharedPage from "./SharedPage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div>
      <SharedPage
        subHeading={"--- What Our Clients Say ---"}
        heading={"TESTIMONIALS"}
      ></SharedPage>

      <div className="my-8">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide className="px-20 mx-auto text-center">
              <Rating
                className="mx-auto"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className="mx-auto text-3xl my-3" />
              <p>{review.details}</p>
              <p className="text-xl font-semibold text-orange-500 pt-3">
                {review.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
