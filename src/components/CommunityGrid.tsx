import { Community } from "@/utils/type";
import React from "react";

const CommunityGrid = ({
  communities,
}: {
  communities: Community[] | null;
}) => {
  if (!communities || communities.length === 0) {
    // Shimmer UI
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-[391px] mx-auto bg-gray-200 animate-pulse shadow-[17px_12px_60px_0px_rgba(0,0,0,0.25)] overflow-hidden rounded-lg"
          >
            <div className="w-full h-[200px] sm:h-[250px] lg:h-[292px] bg-gray-300"></div>
            <div className="w-full h-auto bg-gray-200 p-4 sm:p-6">
              <div className="h-4 sm:h-5 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 sm:h-5 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
      {communities.map((community, index) => (
        <div
          key={index}
          className="w-full max-w-[391px] mx-auto bg-white shadow-[17px_12px_60px_0px_rgba(0,0,0,0.25)] overflow-hidden"
        >
          <img
            src={community.image}
            alt={community.title}
            className="w-full h-[200px] sm:h-[250px] lg:h-[292px] object-cover"
          />
          <div className="w-full h-auto bg-[#FFFFFF]">
            <div className="px-4 sm:px-6 py-4 sm:py-[33px]">
              <p className="text-[#887C68] font-sans font-normal text-[14px] sm:text-[16px] leading-5">
                {community.description}
              </p>
            </div>
            <div className="px-4 sm:px-6 py-3 sm:py-[20px] bg-[#F8F8F8]">
              <h3 className="font-sans text-[18px] sm:text-[22px] font-normal text-[#887C68]">
                {community.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityGrid;
