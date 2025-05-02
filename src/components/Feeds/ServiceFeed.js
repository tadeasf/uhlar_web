/** @format */

import React from "react";
import FeaturedService from "../FeaturesServices/FeaturedService";
import useAllService from "../../hooks/use-all-service";

const ServiceFeed = () => {
  const allService = useAllService();

  return allService.map((node, index) => {
    return <FeaturedService key={index} feature={node} />;
  });
};

export default ServiceFeed;
