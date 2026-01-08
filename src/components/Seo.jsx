import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => {
  const siteTitle = "marcelodnieuchomosci.pl";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO;
