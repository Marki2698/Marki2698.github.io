import React from "react";
import PropTypes from "prop-types";

const Anchor = ({href, label, target = "_self"}) => <a href={href} className="anchor" target={target}>{label}</a>;

Anchor.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string
};

Anchor.defaultProps = {
    href: "https://www.google.com.ua",
    label: "default anchor"
};

export default Anchor;