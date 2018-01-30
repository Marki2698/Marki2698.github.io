import React from "react";
import PropTypes from "prop-types";
import Image from "../components/image.jsx";
import Description from "../components/description.jsx";

const About = ({desc1, desc2}) => <section className="about">
<Description desc={desc1}/>
    <Description desc={desc2}/>
</section>;

About.propTypes = {
    /* src: PropTypes.string,
    alt: PropTypes.string, */
    desc1: PropTypes.string,
    desc2: PropTypes.string
};

About.defaultProps = {
    /* src: "images/semi.jpeg",
    alt: "default image", */
    desc1: "default description",
    desc2: "default description"
};

export default About;