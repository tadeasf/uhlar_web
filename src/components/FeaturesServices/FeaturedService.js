import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FeaturedServiceStyles } from "./FeaturesStyles"

const FeaturedService = ({ feature }) => {
  const { gatsbyPath, headerImage, title } = feature
  const image = getImage(headerImage)

  return (
    <FeaturedServiceStyles>
      <Link to={gatsbyPath}>
        <GatsbyImage
          className="features__item--img"
          image={image}
          alt="Service Image"
        />
        {title && (
          <div className="features__item--content">
            {title && <h4>{title}</h4>}
            <Button text="Čti víc" as="span" arrow={true} />
          </div>
        )}
      </Link>
    </FeaturedServiceStyles>
  )
}

export default FeaturedService
