import React from "react";
import PropTypes, { object } from "prop-types";
import Contact from "../components/contact.jsx";


const Footer = ({contacts}) => <footer className="contacts">
    {
        contacts.map((val, i) => {
            <Contact key={i} src={val.src} alt={val.alt} href={val.href} desc={val.desc} />
        })
    }
</footer>;

Footer.propTypes = {
    contacts: PropTypes.array
};

Footer.defaultProps = {
    src: "images/facebook.png",
    alt: "facebook",
    href: "https://www.facebook.com/profile.php?id=100011445886587",
    desc: "My Facebook account"
};

export default Footer;