import React from "react";
import PropTypes from "prop-types";
import Image from "../components/image.jsx";

const MainPhoto = ({id, src, alt}) => <section id={id} className="main-photo">
    <Image src={src} alt={alt}/>
</section>;

MainPhoto.propTypes = {
    id: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
};

MainPhoto.defaultProps = {
    id: "Marki2698",
    src: "images/me.jpeg",
    alt: "default image"
};

export default MainPhoto;