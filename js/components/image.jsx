import React from "react";
import PropTypes from "prop-types";

const Image = ({src, alt}) => <img className="image" src={src} alt={alt}/>;

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};

Image.defaultProps = {
    src: "images/semi.jpeg",
    alt: "default image"
};

export default Image;