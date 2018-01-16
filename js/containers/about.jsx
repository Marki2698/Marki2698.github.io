import React from "react";
import PropTypes from "prop-types";
import Image from "../components/image.jsx";
import Description from "../components/description.jsx";

const About = ({src, alt, desc}) => <section className="about">
    <Image src={src} alt={alt}/>
    <Description desc={desc}/>
</section>;

About.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    desc: PropTypes.string
};

About.defaultProps = {
    src: "images/semi.jpeg",
    alt: "default image",
    desc: "default description"
};

export default About;