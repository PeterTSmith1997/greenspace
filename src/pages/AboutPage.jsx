import React from "react";
import About from "../components/About";
import { Helmet } from "react-helmet";
const AboutPage = () => (
  <div>
    <Helmet>
      <title>About - Peter Smith</title>
      <meta
        name="description"
        content="Learn more about Peter Smith, a Ph.D. student at Northumbria University."
      />
    </Helmet>
    <About />
  </div>
);

export default AboutPage;
