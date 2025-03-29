import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Community } from "@/utils/type";



// Custom arrow components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-1px] top-1/2 transform -translate-y-1/2 bg-white p-3 shadow-xl  z-10"
    >
      <FaChevronRight className="text-gray-600" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[2px] top-1/2 transform -translate-y-1/2 bg-white p-3 shadow-xl  z-10"
    >
      <FaChevronLeft className="text-gray-600" />
    </button>
  );
};

const Carousel = ({ communities }: { communities: Community[] }) => {
  if (!Array.isArray(communities) || communities.length === 0) {
    // Shimmer UI
    return (
      <div className="flex gap-6 overflow-hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[391px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-gray-200 animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <div>
        <Slider {...settings}>
          {communities.map((community, index) => (
            <div
              key={index}
              className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[391px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden px-4 sm:px-6"
            >
              <img
                src={community.image}
                alt={community.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0  w-full py-4 text-[28px] font-sans font-semibold text-white text-center">
                {community.title.toUpperCase()}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
