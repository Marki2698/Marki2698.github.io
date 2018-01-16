import React from "react";
import PropTypes from "prop-types";

const image = ({src, alt}) => <img className="image" src={src} alt={alt}/>;

image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};

image.defaultProps = {
    src: "images/semi.jpeg",
    alt: "default image"
};

export default image;