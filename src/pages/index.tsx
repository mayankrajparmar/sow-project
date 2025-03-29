import React, { useEffect, useState } from "react";
import CommunityGrid from "@/components/CommunityGrid";
import Carousel from "@/components/Carousel";

const HomePage = () => {
  const [communities, setCommunities] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/communities");
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
      // console.log("Fetched Data:", result);

      if (result.success && Array.isArray(result.data)) {
        const formattedData = result.data.map(
          (item: { post_title: any; post_excerpt: any; image_url: any }) => ({
            title: item.post_title || "No Title",
            description: item.post_excerpt || "No Description",
            image: item.image_url || "/placeholder.jpg",
          })
        );
        setCommunities(formattedData);
      } else {
        // console.error("Invalid Data Format:", result);
        setCommunities([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 bg-[#ffffff]">
      <h1 className="text-center text-2xl sm:text-3xl font-semibold p-6 text-[#887C68] font-sans">
        Communities We Manage
      </h1>
      <CommunityGrid communities={communities} />
      <div className="w-full mt-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold pt-16 pb-8 text-[#887C68] font-sans">
          Our Services
        </h2>
        <div className="w-full max-w-[1360px] mx-auto">
          <Carousel communities={communities} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
