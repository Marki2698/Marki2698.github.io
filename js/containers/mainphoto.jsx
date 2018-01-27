import React from "react";
import PropTypes from "prop-types";
import Image from "../components/image.jsx";

const MainPhoto = ({src, alt}) => <section className="main-photo">
    <Image src={src} alt={alt}/>
</section>;

MainPhoto.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};

MainPhoto.defaultProps = {
    src: "images/me.jpeg",
    alt: "default image"
};

export default MainPhoto;