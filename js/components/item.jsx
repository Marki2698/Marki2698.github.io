import React from "react";
import PropTypes from "prop-types";

//let topics = ["Marki2698", "About me", "What I know", "What I've made", "Contact with me"];

const Item = ({href, click}) => <a href={"#" + href} className="navbar-item" onClick={click}> {href} </a>;

Item.propTypes = {
    href: PropTypes.string,
    click: PropTypes.func
};

Item.defaultProps = {
    href: "#/"
};

export default Item;
//module.exports = item;