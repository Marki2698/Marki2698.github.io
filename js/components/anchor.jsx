import React from "react";
import PropTypes from "prop-types";

const Anchor = ({href, label}) => <a href={href} className="anchor-portfolio">{label}</a>;

Anchor.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string
};

Anchor.defaultProps = {
    href: "https://www.google.com.ua",
    label: "default anchor"
};

export default Anchor;