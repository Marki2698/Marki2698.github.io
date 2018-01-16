import React from "react";
import PropTypes from "prop-types";

const Caption = ({cap}) => <h1 className="caption">{cap}</h1>;

Caption.propTypes = {
    cap: PropTypes.string
};

Caption.defaultProps = {
    cap: "Something went wrong. Default caption"
};

export default caption;