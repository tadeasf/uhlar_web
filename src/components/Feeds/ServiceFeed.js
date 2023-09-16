/** @format */

import React from "react";
import FeaturedProduct from "../Features/FeaturedProduct";
import useAllService from "../../hooks/use-all-service"; // Update the hook to fetch services

const ServiceFeed = () => {
  const allService = useAllService(); // Update the variable name

  return allService.map((node, index) => {
    return <FeaturedProduct key={index} feature={node} />;
  });
};

export default ServiceFeed;
