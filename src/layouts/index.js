import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./all.scss";

const TemplateWrapper = ({ children }) => (
  <div style={{ margin: "6rem auto", maxWidth: 512, padding: "0 16px" }}>
    <Helmet title="We Took A Trip..." />
    <Header />
    <main>{children()}</main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
