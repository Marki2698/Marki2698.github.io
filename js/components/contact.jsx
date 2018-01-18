import React from "react";
import PropTypes from "prop-types";
import Anchor from "../components/anchor.jsx";
import Image from "../components/image.jsx";
//import Decsription from "../components/description.jsx";

const Contact = ({src, alt, href, desc}) => <div className="contact">
    <Image src={src} alt={alt} />
    <Anchor href={href} label={desc}/>
</div>;

Contact.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string,
    desc: PropTypes.string
};

Contact.defaultProps = {
    src: "images/facebook.png",
    alt: "facebook logo",
    href: "https://www.facebook.com/profile.php?id=100011445886587",
    desc: "My account on Facebook"
};

export default Contact;