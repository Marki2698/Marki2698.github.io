import React from "react";
import PropTypes from "prop-types";
import Image from "./image.jsx";

const mainPhoto = ({url, alt}) => <section className="main-photo">
    <Image src={url} alt={alt} />
</section>;

mainPhoto.propTypes = {
    url: PropTypes.string
};

mainPhoto.defaultProps = {
    url: "images/semi.jpeg",
    alt: "default image"
};

export default mainPhoto;
