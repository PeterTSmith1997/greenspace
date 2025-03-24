// BusinessPage.js
import React from "react";
import Business from "../components/business";
import { Helmet } from "react-helmet";

const BusinessPage = () => (
  <div>
    <Helmet>
      <title>Business - Peter Smith</title>
      <meta
        name="description"
        content="Learn about Peter Smith's business ventures and collaborations."
      />
    </Helmet>
    <Business />
  </div>
);

export default BusinessPage;
