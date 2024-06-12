import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      <ClientReviewCard image="/images/man.jpg" user="Ben Kim" role="Chef" />
      <ClientReviewCard
        image="/images/man1.jpg"
        user="Gathura Kimani"
        role="Dublin"
      />
      <ClientReviewCard
        image="/images/man2.jpg"
        user="Kenneth Muniu"
        role="Marketter"
      />
      <ClientReviewCard
        image="/images/man3.jpg"
        user="Peter Njenga"
        role="Farmer"
      />
      <ClientReviewCard
        image="/images/woman2.jpg"
        user="Wangari Njoroge"
        role="Doctor"
      />
    </Carousel>
  );
};

export default ReviewSlider;
