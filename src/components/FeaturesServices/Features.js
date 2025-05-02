/** @format */

import * as React from "react";
import { Link } from "gatsby";
import { FeaturedServicesStyles } from "./FeaturesStyles";
import FeaturedService from "./FeaturedService";
import useFeaturedService from "../../hooks/use-featured-service";
import Button from "../Button/Button";

const Features = ({ title, introduction }) => {
  const featuredService = useFeaturedService();

  return (
    <FeaturedServicesStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}

      <div className="container container__tight container__scroll">
        {featuredService.map((node, index) => {
          return <FeaturedService feature={node} key={index} />;
        })}
      </div>
      <div className="container container__tight learn__more">
        <Button as={Link} to="/sluzby" text="Všechny služby" />
      </div>
    </FeaturedServicesStyles>
  );
};

export default Features;
