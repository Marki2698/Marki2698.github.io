import React from "react";
import PropTypes from "prop-types";

const Description = ({desc}) => <p className="desc">{desc}</p>;

Description.propTypes = {
    desc: PropTypes.string
};

Description.defaultProps = {
    desc: "Description of my personality"
};

export default Description;