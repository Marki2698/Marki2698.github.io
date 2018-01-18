import React from "react";
import PropTypes from "prop-types";

const Image = ({listener, src, alt}) => 
<img onMouseOver={typeof listener === "string" ? () => { return false } : listener() } className="image" src={src} alt={alt}/>;

Image.propTypes = {
    listener: PropTypes.any,
    src: PropTypes.string,
    alt: PropTypes.string
};

Image.defaultProps = {
    listener: "",
    src: "images/semi.jpeg",
    alt: "default image"
};

export default Image;