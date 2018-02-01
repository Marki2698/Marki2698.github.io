import React from "react";
import PropTypes from "prop-types";

//let topics = ["Marki2698", "About me", "What I know", "What I've made", "Contact with me"];

const Item = ({href, desc, click = ""}) => <a href={"#" + href} className="nav-item nav-link navbar-item" onClick={typeof click === "string" ? () => { return false } : (e) => click(e) }> {desc} </a>;

Item.propTypes = {
    href: PropTypes.string,
    desc: PropTypes.string,
    click: PropTypes.any
};

Item.defaultProps = {
    href: "#/"
};

export default Item;
//module.exports = item;