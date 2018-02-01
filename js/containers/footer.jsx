import React from "react";
import PropTypes, { object } from "prop-types";
import Contact from "../components/contact.jsx";


const Footer = ({id, contacts}) => <footer id={id} className="contacts">
    {
        contacts.map((val, i) => 
            <Contact key={i} src={val.src} alt={val.alt} href={val.href} desc={val.desc} />
        )
    }
</footer>;

Footer.propTypes = {
    contacts: PropTypes.array,
    id: PropTypes.string
};

Footer.defaultProps = {
    src: "images/facebook.png",
    alt: "facebook",
    href: "https://www.facebook.com/profile.php?id=100011445886587",
    desc: "My Facebook account",
    id: "contact"
};

export default Footer;