import React from "react";
import PropTypes from "prop-types";

const Description = ({desc}) => <p className="desc">{desc}</p>;

MainPhoto.propTypes = {
    desc: PropTypes.string
};

MainPhoto.defaultProps = {
    desc: "Description of my personality"
};

export default Description;