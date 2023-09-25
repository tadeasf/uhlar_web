/** @format */

// Footer.js

import * as React from "react";
import { Link } from "gatsby";
import { menuItems } from "../../constants/links";
import {
  FooterStyles,
  FooterMenuStyles,
  CopyrightStyles,
} from "./FooterStyles";
import useAllProduct from "../../hooks/use-all-product";
import { UseSiteMetadata } from "../../hooks/useSiteMetadata";
import {
  FaFacebookSquare as Facebook,
  FaLinkedin as Linkedin,
} from "react-icons/fa";

const Footer = () => {
  const allProduct = useAllProduct();
  const siteMeta = UseSiteMetadata();

  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <h5>Odkazy</h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    activeClassName="menu__item--active"
                    className={item.text === "Služby" ? "sluzby-link" : ""}
                  >
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </FooterMenuStyles>
        {allProduct.length > 0 && (
          <FooterMenuStyles className="footer__menu products__menu">
            <h5>
              <Link to="/projekty">
                Všechny projekty<span>.</span>
              </Link>
            </h5>
            <ul>
              {allProduct.map((item, index) => {
                const { gatsbyPath, title } = item;

                return (
                  <li key={index}>
                    <Link to={gatsbyPath}>
                      {title}
                      <span>.</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </FooterMenuStyles>
        )}

        {siteMeta.facebookUsername || siteMeta.linkedinUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <ul>
              {siteMeta.facebookUsername && (
                <li>
                  <a
                    href={`https://www.facebook.com/${siteMeta.facebookUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Facebook />
                  </a>
                </li>
              )}
              {siteMeta.linkedinUsername && (
                <li>
                  <a
                    href={`https://www.linkedin.com/in/${siteMeta.linkedinUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Linkedin />
                  </a>
                </li>
              )}
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>
      <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Developed by{" "}
            <a
              href={siteMeta.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteMeta.developerName}
            </a>
            <span>.</span>
          </p>
        </div>
      </CopyrightStyles>
    </FooterStyles>
  );
};

export default Footer;
