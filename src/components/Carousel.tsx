import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ArrowProps, Community } from "@/utils/type";
import Image from "next/image";

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-1px] top-1/2 transform -translate-y-1/2 bg-white p-3 shadow-xl z-10"
  >
    <FaChevronRight className="text-gray-600" />
  </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[16px] top-1/2 transform -translate-y-1/2 bg-white p-3 shadow-xl z-10"
  >
    <FaChevronLeft className="text-gray-600" />
  </button>
);

const Carousel: React.FC<{ communities: Community[] }> = ({ communities }) => {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    // Check screen width and hide arrows if below 468px
    const checkScreenSize = () => setShowArrows(window.innerWidth > 468);
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!Array.isArray(communities) || communities.length === 0) {
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

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: showArrows ? <NextArrow /> : undefined, // ✅ Hide arrows if screen < 468px
    prevArrow: showArrows ? <PrevArrow /> : undefined, // ✅ Hide arrows if screen < 468px
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 468,
        settings: { slidesToShow: 1.1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings} className="slick-slider">
        {communities.map((community, index) => (
          <div key={index} className="px-6 sm:px-10">
            <div className="relative w-[290px] sm:w-[300px] md:w-[350px] lg:w-[391px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden">
              <Image
                src={community.image}
                alt={community.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 w-full py-4 text-[20px] sm:text-[24px] font-sans font-semibold text-white text-center bg-gradient-to-t from-black/70 to-transparent">
                {community.title.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
