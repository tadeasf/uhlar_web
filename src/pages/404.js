/** @format */

import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import Seo from "../components/SEO";
import Button from "../components/Button/Button";

const error = () => {
  return (
    <>
      <Seo title="Error" />
      <Layout>
        <div className="section">
          <div className="container container__tight">
            <h1>Omlouvám se.</h1>
            <h3>Tato stránka neexistuje.</h3>
            <p>Prosím, využij menu nebo tlačítko Domů.</p>
            <Button text="E.T. Volá Domů!" to="/" as={Link} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default error;
