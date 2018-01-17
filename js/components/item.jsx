import React from "react";
import PropTypes from "prop-types";

//let topics = ["Marki2698", "About me", "What I know", "What I've made", "Contact with me"];

const Item = ({href}) => <a href={"#" + href} className="navbar-item"> {href} </a>;

Item.propTypes = {
    href: PropTypes.string
};

Item.defaultProps = {
    href: "#/"
};

export default Item;
//module.exports = item;